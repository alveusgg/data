export enum Class {
  Mammalia,
  Aves,
  Reptilia,
  Amphibia,
  Arachnida,
  Diplopoda,
  Insecta,
  Malacostraca,
}

const classificationOrder = ["Mammals", "Birds", "Reptiles & Amphibians", "Invertebrates"] as const;

export type Classification = (typeof classificationOrder)[number];

export const getClassification = (c: Class): Classification => {
  switch (c) {
    case Class.Mammalia: return "Mammals";
    case Class.Aves: return "Birds";
    case Class.Reptilia:
    case Class.Amphibia: return "Reptiles & Amphibians";
    case Class.Arachnida:
    case Class.Diplopoda:
    case Class.Insecta:
    case Class.Malacostraca: return "Invertebrates";
  }
}

export const sortAmbassadorClassification = (a: Class, b: Class): number => {
  return classificationOrder.indexOf(getClassification(a)) - classificationOrder.indexOf(getClassification(b));
}
