/// <reference types="@types/node" />

import {
  glob,
  writeFile,
  stat,
  readFile,
  copyFile,
  mkdir,
  unlink,
} from "node:fs/promises";
import { dirname, relative, resolve } from "node:path";

import sharp from "sharp";
import pacote from "pacote";
import npmConfig from "@npmcli/config";

import packageJson from "../package.json" assert { type: "json" };

const kb = (bytes: number) => `${(bytes / 1024).toFixed(2)} KB`;

const warn = (message: string) => console.warn(`\x1b[33m${message}\x1b[0m`);

const cache = "node_modules/.cache/optimize";
const images = "build/**/*.@(png|jpg|jpeg)";

// Copy a file from the cache if it exists
// Assumes that the file name contains a content hash
const restoreCache = async (file: string) => {
  const cached = `${cache}/${file}`;
  if (await stat(cached).catch(() => null)) {
    await copyFile(cached, file);
    return true;
  }
  return false;
};

// Copy a file to the cache
const writeCache = async (file: string) => {
  const cached = `${cache}/${file}`;
  await mkdir(dirname(cached), { recursive: true });
  await copyFile(file, cached);
};

// Remove any files in the cache not provided
const purgeCache = async (files: string[]) => {
  const permitted = new Set(files);

  // Get all the files in the cache, excluding directories
  const resolved = resolve(cache);
  const cached = await Array.fromAsync(
    glob(`${cache}/**/*`, { withFileTypes: true }),
  ).then((files) =>
    files
      .filter((file) => file.isFile())
      .map((file) => relative(resolved, `${file.parentPath}/${file.name}`)),
  );

  await Promise.all(
    cached.map(async (file) => {
      if (!permitted.has(file)) {
        const cachedFile = `${cache}/${file}`;
        await unlink(cachedFile).catch(() => {
          warn(`${cachedFile}: failed to unlink`);
        });
      }
    }),
  );
};

const populateCache = async () => {
  // Load the npm config for the current context
  // This will include registry and auth settings
  const config = new npmConfig({
    npmPath: new URL("./", import.meta.url).pathname,
    definitions: {},
    shorthands: {},
    flatten: (data, flat = {}) => Object.assign(flat, data),
  });
  await config.load();

  // Extract the most recent build of the package
  await mkdir(cache, { recursive: true });
  await pacote.extract(`${packageJson.name}@latest`, cache, config.flat);

  // Remove any files that aren't images
  const files = await Array.fromAsync(
    glob(`${cache}/**/*`, {
      withFileTypes: true,
      exclude: [`${cache}/${images}`],
    }),
  ).then((files) =>
    files
      .filter((file) => file.isFile())
      .map((file) => `${file.parentPath}/${file.name}`),
  );
  await Promise.all(
    files.map(async (file) => {
      await unlink(file).catch(() => {
        warn(`${file}: failed to unlink`);
      });
    }),
  );
};

interface OptimizeResultStats {
  width: number;
  height: number;
  size: number;
  quality: number;
}

interface OptimizeResult {
  original: OptimizeResultStats;
  optimized?: OptimizeResultStats;
}

// Optimize a file in-place
const optimize = async (file: string): Promise<OptimizeResult | void> => {
  const contents = await readFile(file);
  let img = await sharp(contents);
  const metadata = await img.metadata();
  if (!metadata.width || !metadata.height || !metadata.format) {
    warn(`${file}: failed to read metadata`);
    return;
  }

  let resized: sharp.Metadata | undefined;
  if (metadata.width > 4096 || metadata.height > 4096) {
    img = img.resize({ width: 4096, height: 4096, fit: "inside" });
    resized = await img.toBuffer().then((buf) => sharp(buf).metadata());
  }

  const opts =
    metadata.format === "png"
      ? { progressive: true, compressionLevel: 9, effort: 10 }
      : { progressive: true, mozjpeg: true };

  const step = 5;
  const min = 50;
  let quality = 100;
  let shrunk: Buffer | undefined;
  while (quality >= min) {
    shrunk = await img
      .toFormat(metadata.format, { quality, ...opts })
      .toBuffer();
    if (shrunk.length <= 1024 * 1024 && shrunk.length <= contents.length) break;
    quality -= step;
  }

  if (!shrunk) {
    warn(`${file}: failed to optimize`);
    return;
  }

  if (shrunk.length > contents.length) {
    warn(
      `${file}: optimized larger than original [ ${kb(contents.length)} -> ${kb(shrunk.length)} ]`,
    );
    return {
      original: {
        width: metadata.width,
        height: metadata.height,
        size: contents.length,
        quality: 100,
      },
    };
  }

  await writeFile(file, shrunk);
  return {
    original: {
      width: metadata.width,
      height: metadata.height,
      size: contents.length,
      quality: 100,
    },
    optimized: {
      width: resized?.width ?? metadata.width,
      height: resized?.height ?? metadata.height,
      size: shrunk.length,
      quality,
    },
  };
};

export default async () => {
  // Track processed files and an associated stat
  const processed: [string, string][] = [];

  for await (const file of glob(images)) {
    // Check if the file exists in the cache
    const cached = await restoreCache(file);
    if (cached) {
      processed.push([file, "cached"]);
      continue;
    }

    // Otherwise, optimize the file
    const optimized = await optimize(file);
    if (!optimized) {
      continue;
    }

    // If not optimized, don't store it in the cache
    if (optimized.optimized === undefined) {
      processed.push([file, "unoptimized"]);
      continue;
    }

    // Store the optimized file in the cache
    await writeCache(file);
    processed.push([
      file,
      `optimized (${kb(optimized.original.size)} -> ${kb(optimized.optimized.size)} @ ${optimized.optimized.quality}%)`,
    ]);
  }

  // Remove any unknown files in the cache
  await purgeCache(processed.map(([file]) => file));

  return processed;
};

// If this script has been run directly, populate the cache
if (import.meta.filename === process.argv[1]) {
  console.log("Populating cache from latest published package...");
  await populateCache();
}
