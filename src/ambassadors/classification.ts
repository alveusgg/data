const classificationOrder = [
  "Mammals",
  "Birds",
  "Reptiles & Amphibians",
  "Invertebrates",
] as const;

export type Classification = (typeof classificationOrder)[number];

const classes = {
  mammalia: "Mammals",
  aves: "Birds",
  reptilia: "Reptiles & Amphibians",
  amphibia: "Reptiles & Amphibians",
  arachnida: "Invertebrates",
  diplopoda: "Invertebrates",
  insecta: "Invertebrates",
  malacostraca: "Invertebrates",
} as const satisfies Record<string, Classification>;

export type Class = keyof typeof classes;

export const isClass = (str: string): str is Class =>
  Object.keys(classes).includes(str);

export const getClassification = (c: Class): Classification => classes[c];

export const sortAmbassadorClassification = (a: Class, b: Class): number => {
  return (
    classificationOrder.indexOf(getClassification(a)) -
    classificationOrder.indexOf(getClassification(b))
  );
};
