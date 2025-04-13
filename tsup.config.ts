/// <reference types="@types/node" />

import { copyFile, glob } from "node:fs/promises";

import { defineConfig } from "tsup";

import optimize from "./script/optimize";

const log = (files: (string | [string, string])[]) => {
  // Get the longest file name
  const maxLength = Math.max(
    ...files.map((file) => (Array.isArray(file) ? file[0] : file).length),
  );

  // Log each file name with the same length, followed by the stat if available
  for (const file of files) {
    const [name, stat] = Array.isArray(file) ? file : [file, ""];
    console.log("EXT", name.padEnd(maxLength), stat);
  }
};

export default defineConfig(async () => ({
  // Every .ts file should be accessible from the outside
  // Don't include .d.ts files as they throw errors
  entry: await Array.fromAsync(glob("src/**/*.ts", { exclude: ["**/*.d.ts"] })),

  // Output to the build directory, making sure it is empty
  outDir: "build",
  clean: true,

  // Generate ESM .js files in the build directory
  format: ["esm"],
  outExtension: () => ({ js: ".js" }),

  // We also want .d.ts and .map files for each .js file
  dts: true,
  sourcemap: true,

  // Ensure that any shared code is chunked into dedicated files
  // This mimics how we're doing imports in the source code
  splitting: true,

  // Imported images should remain as imports that're copied to the output
  loader: {
    ".png": "copy",
    ".jpg": "copy",
    ".jpeg": "copy",
  },

  // When images are copied, match their original directory structure
  // For any chucked code generated, store it in a dedicated directory
  esbuildOptions: (options) => {
    options.assetNames = "[dir]/[name]-[hash]";
    options.chunkNames = "chunks/[name]-[hash]";
  },

  onSuccess: async () => {
    // Copy across our Tailwind CSS files
    // As well as our .d.ts files that tsup can't handle
    const cssDts = await Array.fromAsync(glob("src/**/*.@(d.ts|css)")).then(
      (files) =>
        Promise.all(
          files.map(async (file) => {
            const dest = file.replace(/^src\//, "build/");
            await copyFile(file, dest);
            return dest;
          }),
        ),
    );
    log(cssDts);

    // Optimize all the images in the build directory
    const images = await optimize("build/**/*.@(png|jpg|jpeg)");
    log(images);
  },
}));
