/// <reference types="@types/node" />

import { resolve, extname } from "node:path";
import { writeFile, stat } from "node:fs/promises";
import { type Stats } from "node:fs";

import imagemin, { type Result } from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";

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

const png = async (image: string, info: Stats) => {
  const file = await imagemin([image], {
    plugins: [imageminPngquant({ speed: 1, quality: [0, 1] })],
  }).then((files) => files[0]);
  if (!file) {
    console.warn(`Failed to optimize ${image}`);
    return;
  }

  if (file.data.length >= info.size) {
    console.log(
      `Using original ${image}, optimized larger (${info.size / 1024} KB)`,
    );
    return;
  }

  await writeFile(image, file.data);
  console.log(
    `Optimized ${image} (${info.size / 1024} -> ${file.data.length / 1024} KB)`,
  );
};

const jpeg = async (image: string, info: Stats) => {
  const step = 5;
  const min = 10;
  let quality = 90;
  let file: Result | undefined;
  while (quality >= min) {
    file = await imagemin([image], {
      plugins: [imageminMozjpeg({ quality })],
    }).then((files) => files[0]);
    if (!file) break;
    if (file.data.length < 1024 * 1024) break;
    quality -= step;
  }

  if (!file) {
    console.warn(`Failed to optimize ${image}`);
    return;
  }

  if (file.data.length >= info.size) {
    console.log(
      `Using original ${image}, optimized larger (${info.size / 1024} KB)`,
    );
    return;
  }

  await writeFile(image, file.data);
  console.log(
    `Optimized ${image} (${info.size / 1024} -> ${
      file.data.length / 1024
    } KB, quality ${quality} (${(90 - quality) / step + 1}))`,
  );
};

for (const image of images) {
  // If we're under 1MB, skip
  const info = await stat(image);
  if (info.size <= 1024 * 1024) {
    console.log(`Skipping ${image} (${info.size / 1024} KB)`);
    continue;
  }

  // If this is a PNG, single-shot optimize
  if (image.endsWith(".png")) {
    await png(image, info);
    continue;
  }

  // If this is a JPEG, attempt to get it under 1MB
  await jpeg(image, info);
}
