/// <reference types="@types/node" />

import { Project, SyntaxKind } from "ts-morph";
import { z } from "zod";

import { iucnStatusSchema } from "../src/iucn";

const token = process.env.IUCN_API_TOKEN;
if (!token) {
  throw new Error("IUCN_API_TOKEN is not set");
}

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

const project = new Project();
const file = project.addSourceFileAtPath("src/ambassadors/species.ts");

const species = file
  .getVariableDeclaration("species")
  ?.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);
if (!species) throw new Error("Could not find species variable declaration");

const objects = species.getChildrenOfKind(SyntaxKind.PropertyAssignment);
if (!objects.length)
  throw new Error("No species found in the species variable declaration");

for (const node of objects) {
  const obj = node.getFirstChildByKind(SyntaxKind.ObjectLiteralExpression);
  if (!obj)
    throw new Error("Could not find object literal in species declaration");

  const name = obj
    .getProperty("name")
    ?.getFirstChildByKind(SyntaxKind.StringLiteral);
  if (!name) throw new Error("Could not find name property in species object");

  const iucn = obj
    .getProperty("iucn")
    ?.getFirstChildByKind(SyntaxKind.ObjectLiteralExpression);
  if (!iucn) throw new Error("Could not find IUCN property in species object");

  const id = iucn
    .getProperty("id")
    ?.getFirstChildByKind(SyntaxKind.NumericLiteral);
  if (!id) continue; // Skip when ID is null

  const assessment = iucn
    .getProperty("assessment")
    ?.getFirstChildByKind(SyntaxKind.NumericLiteral);
  if (!assessment)
    throw new Error(
      `Could not find assessment property for ${name.getLiteralValue()} (${id.getLiteralValue()})`,
    );

  const status = iucn
    .getProperty("status")
    ?.getFirstChildByKind(SyntaxKind.StringLiteral);
  if (!status)
    throw new Error(
      `Could not find status property for ${name.getLiteralValue()} (${id.getLiteralValue()})`,
    );

  console.log(
    `Checking IUCN data for ${name.getLiteralValue()} (${id.getLiteralValue()})`,
  );
  const speciesData = await lookupSpecies(id.getLiteralValue());
  const assessmentId = speciesData.assessments.find(
    (a) => a.latest,
  )?.assessment_id;
  if (!assessmentId)
    throw new Error(
      `No latest assessment found for species ${name.getLiteralValue()} (${id.getLiteralValue()})`,
    );

  const assessmentData = await lookupAssessment(assessmentId);
  let assessmentStatus = assessmentData.red_list_category.code;
  if (assessmentData.population_trend?.code === "0")
    assessmentStatus += "/increasing";
  if (assessmentData.population_trend?.code === "1")
    assessmentStatus += "/decreasing";

  if (
    assessmentId !== assessment.getLiteralValue() ||
    assessmentStatus !== status.getLiteralValue()
  ) {
    console.log(
      `Updating IUCN data for ${name.getLiteralValue()} (${id.getLiteralValue()}) from ${assessment.getLiteralValue()} ${status.getLiteralValue()} to ${assessmentId} ${assessmentStatus}`,
    );

    assessment.setLiteralValue(assessmentId);
    status.setLiteralValue(assessmentStatus);
  }
}

await file.save();
