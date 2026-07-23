/// <reference types="@types/node" />

import { dirname } from "node:path";

import { defineConfig, globalLogger } from "tsdown";

import optimize from "./scripts/optimize.ts";

const logFiles = (files: (string | [string, string])[]) => {
  // Get the longest file name
  const maxLength = Math.max(
    ...files.map((file) => (Array.isArray(file) ? file[0] : file).length),
  );

  // Log each file name with the same length, followed by the stat if available
  for (const file of files) {
    const [name, stat] = Array.isArray(file) ? file : [file, ""];
    globalLogger.info(name.padEnd(maxLength), stat);
  }
};

export default defineConfig({
  // Every .ts file should be accessible from the outside
  // This includes our custom .d.ts files for additional types
  entry: "src/**/*.ts",

  // Output to the build directory, including .d.ts typings and .js.map source maps
  outDir: "build",
  dts: true,
  sourcemap: true,

  // Imported images should remain as imports that're copied to the output
  loader: {
    ".png": "copy" as const,
    ".jpg": "copy" as const,
    ".jpeg": "copy" as const,
    ".mp3": "copy" as const,
  },

  // Copy across our Tailwind CSS files
  copy: ["src/**/*.css"],

  // When images are copied, match their original directory structure
  // For any chunked code generated, store it in a dedicated directory
  outputOptions: {
    assetFileNames: ({ originalFileNames }) => {
      const originalFileName = originalFileNames[0];
      if (!originalFileName)
        throw new Error("Missing original file name for asset");
      if (!originalFileName.startsWith("src/assets/")) {
        globalLogger.warn(
          `Unexpected original file name for asset: ${originalFileName}`,
        );
        return "assets/[name]-[hash][extname]";
      }

      const dir = dirname(originalFileName.replace(/^src\//, ""));
      return `${dir}/[name]-[hash][extname]`;
    },
    chunkFileNames: "chunks/[name]-[hash].js",
    entryFileNames: "[name].js",
  },

  // Optimize all the images in the build directory
  onSuccess: async () => {
    const start = performance.now();
    globalLogger.info("Post-build start");

    await optimize().then((files) => logFiles(files));

    globalLogger.success(
      `Post-build complete in ${Math.round(performance.now() - start)}ms`,
    );
  },
});
