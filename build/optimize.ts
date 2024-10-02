/// <reference types="@types/node" />

import { resolve, extname } from "node:path";
import { writeFile, stat } from "node:fs/promises";

import sharp from "sharp";

const images = process.argv.slice(2).map((arg) => resolve(arg));
if (!images.length) {
  console.log("No images to optimize");
  process.exit(0);
}

const unsupported = images.filter((image) => {
  const ext = extname(image);
  return ![".jpg", ".jpeg", ".png"].includes(ext);
});
if (unsupported.length) {
  console.error("Unsupported image formats:", unsupported.join(", "));
  process.exit(1);
}

const shrink = async (path: string) => {
  const info = await stat(path);

  let img = await sharp(path);
  const metadata = await img.metadata();
  if (!metadata.width || !metadata.height || !metadata.format) {
    console.warn(`Failed to read metadata for ${path}`);
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
    console.warn(`Failed to optimize ${path}`);
    return;
  }

  if (file.length > info.size) {
    console.log(
      `Using original ${path}, optimized larger [ ${info.size / 1024} -> ${
        file.length / 1024
      } KB ]`,
    );
    return;
  }

  await writeFile(path, file);
  console.log(
    `Optimized ${path}`,
    "[",
    `${info.size / 1024} -> ${file.length / 1024} KB,`,
    resized
      ? `resized (${metadata.width}x${metadata.height} -> ${resized.width}x${resized.height}),`
      : `original (${metadata.width}x${metadata.height}),`,
    `quality ${quality} (${(100 - quality) / step + 1}))`,
    "]",
  );
};

for (const image of images) await shrink(image);
