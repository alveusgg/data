/// <reference types="@types/node" />

import { dirname, relative } from "node:path";
import { glob, writeFile, stat, mkdir, readFile } from "node:fs/promises";
import { hash } from "node:crypto";

import sharp from "sharp";

const kb = (bytes: number) => `${(bytes / 1024).toFixed(2)} KB`;

const shrink = async (source: string, dest: string) => {
  const contents = await readFile(source);
  const sha = hash("sha256", contents, "hex");
  const hashed = dest.replace(/(\.[^.]*)?$/, `.${sha}$1`);

  if (await stat(hashed).catch(() => null)) {
    console.log(
      `Skipping ${source} -> ${relative(process.cwd(), hashed)} (already optimized)`,
    );
    return hashed;
  }

  let img = await sharp(contents);
  const metadata = await img.metadata();
  if (!metadata.width || !metadata.height || !metadata.format) {
    console.warn(`Failed to read metadata for ${source}`);
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
  let file: Buffer | undefined;
  while (quality >= min) {
    file = await img.toFormat(metadata.format, { quality, ...opts }).toBuffer();
    if (file.length <= 1024 * 1024 && file.length <= contents.length) break;
    quality -= step;
  }

  if (!file) {
    console.warn(`Failed to optimize ${source}`);
    return;
  }

  if (file.length > contents.length) {
    console.log(
      `Using original ${source} -> ${relative(process.cwd(), hashed)}, optimized larger [ ${kb(contents.length)} -> ${kb(file.length)} ]`,
    );
    file = contents;
  }

  await mkdir(dirname(hashed), { recursive: true });
  await writeFile(hashed, file);
  if (file !== contents) {
    console.log(
      `Optimized ${relative(process.cwd(), source)} -> ${relative(process.cwd(), hashed)}:`,
      "[",
      `${kb(contents.length)} -> ${kb(file.length)},`,
      resized
        ? `resized (${metadata.width}x${metadata.height} -> ${resized.width}x${resized.height}),`
        : `original (${metadata.width}x${metadata.height}),`,
      `quality ${quality} (${(100 - quality) / step + 1}))`,
      "]",
    );
  }

  return hashed;
};

const optimize = async (source: string, dest: string) => {
  const assets = glob(`${source}/**/*.{jpg,jpeg,png}`);
  const optimized = new Map<string, string>();
  for await (const asset of assets) {
    const path = await shrink(asset, asset.replace(source, dest));
    if (path) optimized.set(asset, path);
  }
  return optimized;
};

export default optimize;
