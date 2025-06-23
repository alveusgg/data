/// <reference types="@types/node" />

import { writeFile, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

import { z } from "zod/v4";

import type { Species } from "../src/ambassadors/species";
import { iucnStatusSchema } from "../src/iucn";

const token = process.env.IUCN_API_TOKEN;
if (!token) {
  throw new Error("IUCN_API_TOKEN is not set");
}

const path = new URL("../src/ambassadors/species.ts", import.meta.url);
const updateFile = async (replacement: (content: string) => string) =>
  readFile(path, "utf8")
    .then(replacement)
    .then((content) => writeFile(path, content));

const lookup = async (endpoint: string) => {
  const response = await fetch(
    `https://api.iucnredlist.org/api/v4${endpoint}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "User-Agent": "AlveusGG/1.0",
      },
    },
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch IUCN data ${endpoint}: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
};

const lookupSpecies = async (id: number) => {
  const data = await lookup(`/taxa/sis/${id}`);
  return z
    .object({
      sis_id: z.number(),
      assessments: z.array(
        z.object({
          latest: z.boolean(),
          assessment_id: z.number(),
        }),
      ),
    })
    .parse(data);
};

const lookupAssessment = async (id: number) => {
  const data = await lookup(`/assessment/${id}`);
  return z
    .object({
      population_trend: z
        .object({
          description: z.object({
            en: z.string(),
          }),
          code: z.literal([
            "0", // Increasing
            "1", // Decreasing
            "2", // Stable
            "3", // Unknown
          ]),
        })
        .nullable(),
      red_list_category: z.object({
        description: z.object({
          en: z.string(),
        }),
        code: iucnStatusSchema,
      }),
    })
    .parse(data);
};

// Mark the raw species data as exported
await updateFile((content) =>
  content.replace(/^const species = /m, "export const species = "),
);

// Import the newly exported species data
const species = await import(fileURLToPath(path)).then(
  (module) => module.species as Record<string, Species>,
);

// Check latest assessment for each species
const updates: { id: number; assessment: number; status: string }[] = [];
for (const value of Object.values(species)) {
  if (!value.iucn.id) continue;

  console.log(`Checking IUCN data for ${value.name} (${value.iucn.id})`);
  const speciesData = await lookupSpecies(value.iucn.id);
  const assessmentId = speciesData.assessments.find(
    (a) => a.latest,
  )?.assessment_id;
  if (!assessmentId) {
    throw new Error(
      `No latest assessment found for species ${value.name} (${value.iucn.id})`,
    );
  }

  const assessmentData = await lookupAssessment(assessmentId);
  let status = assessmentData.red_list_category.code;
  if (assessmentData.population_trend?.code === "0") status += "/increasing";
  if (assessmentData.population_trend?.code === "1") status += "/decreasing";

  if (assessmentId !== value.iucn.assessment || status !== value.iucn.status) {
    console.log(
      `Updating IUCN data for ${value.name} (${value.iucn.id}) from ${value.iucn.assessment} ${value.iucn.status} to ${assessmentId} ${status}`,
    );
    updates.push({
      id: value.iucn.id,
      assessment: assessmentId,
      status: status,
    });
  }
}

// Apply updates to the species data, and revert the export
await updateFile((content) => {
  let updatedContent = content;
  for (const update of updates) {
    updatedContent = updatedContent.replace(
      new RegExp(
        `iucn: {([\\s\\n]+)id: ${update.id},\\1assessment: \\d+,\\1status: "[^"]+"`,
        "m",
      ),
      `iucn: {$1id: ${update.id},$1assessment: ${update.assessment},$1status: "${update.status}"`,
    );
  }
  return updatedContent.replace(
    /^export const species = /m,
    "const species = ",
  );
});
