/// <reference types="@types/node" />

import { writeFile, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

import { z } from "zod/v4";

import type { Species } from "../src/ambassadors/species";

const token = process.env.IUCN_API_TOKEN;
if (!token) {
  throw new Error("IUCN_API_TOKEN is not set");
}

const path = new URL("../src/ambassadors/species.ts", import.meta.url);
const updateFile = async (replacement: (content: string) => string) =>
  readFile(path, "utf8")
    .then(replacement)
    .then((content) => writeFile(path, content));

const lookupSchema = z.object({
  sis_id: z.number(),
  assessments: z.array(
    z.object({
      latest: z.boolean(),
      assessment_id: z.number(),
    }),
  ),
});
const lookupSpecies = async (id: number) => {
  const response = await fetch(
    `https://api.iucnredlist.org/api/v4/taxa/sis/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "User-Agent": "AlveusGG/1.0",
      },
    },
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch IUCN data for ID ${id}: ${response.status} ${response.statusText}`,
    );
  }

  const raw = await response.json();
  return lookupSchema.parse(raw);
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
const updates: { id: number; assessment: number }[] = [];
for (const value of Object.values(species)) {
  if (!value.iucn.id) continue;

  console.log(`Checking IUCN data for ${value.name} (${value.iucn.id})`);
  const data = await lookupSpecies(value.iucn.id);
  const assessment = data.assessments.find((a) => a.latest);
  if (!assessment) {
    console.warn(
      `No latest assessment found for ${value.name} (${value.iucn.id})`,
    );
    continue;
  }

  if (assessment.assessment_id !== value.iucn.assessment) {
    console.log(
      `Updating assessment for ${value.name} (${value.iucn.id}) from ${value.iucn.assessment} to ${assessment.assessment_id}`,
    );
    updates.push({
      id: value.iucn.id,
      assessment: assessment.assessment_id,
    });
  }
}

// Apply updates to the species data, and revert the export
await updateFile((content) => {
  let updatedContent = content;
  for (const update of updates) {
    updatedContent = updatedContent.replace(
      new RegExp(`(iucn: {\\s*id: ${update.id},\\s*assessment: )\\d+`, "g"),
      `$1${update.assessment}`,
    );
  }
  return updatedContent.replace(
    /^export const species = /m,
    "const species = ",
  );
});
