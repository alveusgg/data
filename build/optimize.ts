/// <reference types="@types/node" />

import { fileURLToPath } from "node:url";
import { dirname, relative } from "node:path";
import { glob, writeFile, stat, mkdir } from "node:fs/promises";

import sharp from "sharp";

const shrink = async (source: string, dest: string) => {
  const info = await stat(source);

  let img = await sharp(source);
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
    if (file.length <= 1024 * 1024 && file.length <= info.size) break;
    quality -= step;
  }

  if (!file) {
    console.warn(`Failed to optimize ${source}`);
    return;
  }

  if (file.length > info.size) {
    console.log(
      `Using original ${source}, optimized larger [ ${info.size / 1024} -> ${
        file.length / 1024
      } KB ]`,
    );
    return;
  }

  await mkdir(dirname(dest), { recursive: true });
  await writeFile(dest, file);
  console.log(
    `Optimized ${relative(process.cwd(), source)} -> ${relative(process.cwd(), dest)}:`,
    "[",
    `${info.size / 1024} -> ${file.length / 1024} KB,`,
    resized
      ? `resized (${metadata.width}x${metadata.height} -> ${resized.width}x${resized.height}),`
      : `original (${metadata.width}x${metadata.height}),`,
    `quality ${quality} (${(100 - quality) / step + 1}))`,
    "]",
  );
};

const source = fileURLToPath(new URL("../src/assets", import.meta.url));
const dest = fileURLToPath(new URL("./assets", import.meta.url));
const images = glob(`${source}/**/*.{jpg,jpeg,png}`);
for await (const image of images)
  await shrink(image, image.replace(source, dest));
