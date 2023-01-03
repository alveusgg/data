import { createReadStream, writeFileSync, readFileSync } from "node:fs";
import probe from "probe-image-size";
import prettier from "prettier";
import { z, ZodSchema } from "zod";

import {
  ambassadorsSchema,
  camsSchema,
  enclosuresSchema,
  facilitiesSchema,
  imagesSchema,
} from "./schema.js";

const localUrlPrefix = "https://alveusgg.github.io/data/";

async function addImageInfos<
  T extends Record<string, { images?: z.infer<typeof imagesSchema> }>
>(objs: T): Promise<T> {
  for (const name in objs) {
    const obj = objs[name];
    if (obj?.images) {
      // noinspection JSPrimitiveTypeWrapperUsage
      obj.images = await Promise.all(
        obj.images.map(async (image) => {
          if (
            image.width !== undefined &&
            image.height !== undefined &&
            image.type !== undefined
          ) {
            // nothing to do
            return image;
          }

          try {
            let info: any;
            if (image.url.startsWith(localUrlPrefix)) {
              info = await probe(
                createReadStream(image.url.substring(localUrlPrefix.length))
              );
            } else {
              info = await probe(image.url);
            }

            return {
              ...image,
              width: info.width,
              height: info.height,
              type: info.type,
            };
          } catch (e) {
            console.error(e);
          }

          return image;
        })
      );
    }
  }

  return objs;
}

async function updateDataFile<S extends ZodSchema>(
  fileName: string,
  schema: S,
  transformer?: (data: z.infer<S>) => Promise<z.infer<S>>
) {
  console.log(`Checking, formatting and updating: ${fileName}`);

  const path = `./${fileName}.json`;
  let data = schema.parse(JSON.parse(readFileSync(path, "utf-8")));
  if (transformer) {
    data = await transformer(data);
  }
  const res = prettier.format(JSON.stringify(data, undefined, 2), {
    parser: "json",
  });
  writeFileSync(path, res);
}

Promise.all([
  updateDataFile("ambassadors", ambassadorsSchema, async (ambassadors) => {
    ambassadors = await addImageInfos(ambassadors);
    return ambassadors;
  }),
  updateDataFile("enclosures", enclosuresSchema, async (ambassadors) => {
    ambassadors = await addImageInfos(ambassadors);
    return ambassadors;
  }),
  updateDataFile("cams", camsSchema, async (ambassadors) => {
    ambassadors = await addImageInfos(ambassadors);
    return ambassadors;
  }),
  updateDataFile("facilities", facilitiesSchema, async (ambassadors) => {
    ambassadors = await addImageInfos(ambassadors);
    return ambassadors;
  }),
]).then(() => {
  console.log("DONE!");
});
