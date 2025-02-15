/// <reference types="@types/node" />

import { fileURLToPath } from "node:url";
import { dirname, relative } from "node:path";
import {
  glob,
  writeFile,
  mkdir,
  readFile,
  stat,
  unlink,
  copyFile,
} from "node:fs/promises";

import optimize from "./optimize";

const clean = async (dir: string, expected: Set<string>) => {
  const cleanup = glob(`${dir}/**/*`);
  for await (const file of cleanup) {
    const stats = await stat(file);
    if (stats.isFile() && !expected.has(file)) {
      console.log(`Removing ${relative(process.cwd(), file)}`);
      await unlink(file);
    }
  }
};

const relativeFile = (source: string, dest: string) => {
  let path = relative(dirname(source), dest);
  if (!path.startsWith(".")) path = `./${path}`;
  return path;
};

const imports = async (
  source: string,
  dest: string,
  map: Map<string, string>,
) => {
  let contents = await readFile(source, "utf-8");
  for (const [from, to] of map) {
    contents = contents.replace(
      new RegExp(
        `import (.*) from (["'])${relativeFile(source, from)}\\2`,
        "g",
      ),
      `import $1 from $2${relativeFile(dest, to)}$2`,
    );
  }

  await mkdir(dirname(dest), { recursive: true });
  await writeFile(dest, contents);
  console.log(
    `Built ${relative(process.cwd(), source)} -> ${relative(process.cwd(), dest)}`,
  );

  return dest;
};

const src = fileURLToPath(new URL("../src", import.meta.url));
const dest = fileURLToPath(new URL("../build", import.meta.url));

const optimized = await optimize(`${src}/assets`, `${dest}/assets`);
const processed = new Set(optimized.values());

const files = glob(`${src}/**/*.ts`);
for await (const file of files)
  processed.add(await imports(file, file.replace(src, dest), optimized));

const css = glob(`${src}/**/*.css`);
for await (const file of css) {
  const path = file.replace(src, dest);
  await mkdir(dirname(path), { recursive: true });
  await copyFile(file, path);
  processed.add(path);
}

await clean(dest, processed);
