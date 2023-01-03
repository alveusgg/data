import { z } from "zod";

const slugSchema = z.string().regex(/[a-z-]/);

export const imageSchema = z
  .object({
    url: z.string().url(),
    alt: z.string().optional(),
    label: z.string().optional(),
    width: z.number().optional(),
    height: z.number().optional(),
    type: z.string().optional(),
  })
  .passthrough();

export const imagesSchema = z.array(imageSchema);

export const linksSchema = z.record(z.string(), z.string().url());

export const ambassadorSchema = z
  .object({
    name: z.string(),
    species: z.string(),
    scientificName: z.string(),
    sex: z.string(),
    dateOfBirth: z.union([
      z.string().length(0),
      z.string().regex(/\d{4}-\d{2}-\d{2}/),
    ]),
    iucnStatus: z.string(),
    story: z.string(),
    conservationMission: z.string(),
    links: linksSchema.optional(),
    images: imagesSchema.optional(),
  })
  .passthrough();

export const ambassadorsSchema = z.record(slugSchema, ambassadorSchema);

const commonFacilityAndEnclosureSchema = z.object({
  label: z.string(),
  costToBuild: z.string().optional(),
  sponsoredBy: z.string().optional(),
  links: linksSchema.optional(),
  images: imagesSchema.optional(),
  ambassadors: z.array(z.string()).optional(),
  nonAmbassadors: z.array(z.string()).optional(),
  cams: z.array(z.string()).optional(),
});

export const facilitySchema = commonFacilityAndEnclosureSchema.and(
  z
    .object({
      enclosures: z.array(z.string()).optional(),
    })
    .passthrough()
);

export const facilitiesSchema = z.record(slugSchema, facilitySchema);

export const enclosureSchema = commonFacilityAndEnclosureSchema.and(
  z
    .object({
      facilities: z.array(z.string()).optional(),
    })
    .passthrough()
);

export const enclosuresSchema = z.record(slugSchema, enclosureSchema);

export const camSchema = z
  .object({
    label: z.string(),
    command: z.string(),
    cams: z.array(z.string()).optional(),
    facilities: z.array(z.string()).optional(),
    ambassadors: z.array(z.string()).optional(),
    nonAmbassadors: z.array(z.string()).optional(),
    links: linksSchema.optional(),
    images: imagesSchema.optional(),
  })
  .passthrough();

export const camsSchema = z.record(slugSchema, camSchema);
