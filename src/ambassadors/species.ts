import { z } from "zod";

import { isIUCNStatus } from "../iucn";
import { isClass } from "./classification";

export const speciesSchema = z.object({
  name: z.string(),
  scientificName: z.string(),
  iucn: z.object({
    id: z.number().nullable(),
    status: z.string().refine(isIUCNStatus),
  }),
  native: z.object({
    text: z.string(),
    source: z.string(),
  }),
  lifespan: z.object({
    wild: z
      .union([z.number(), z.object({ min: z.number(), max: z.number() })])
      .optional(),
    captivity: z
      .union([z.number(), z.object({ min: z.number(), max: z.number() })])
      .optional(),
    source: z.string(),
  }),
  class: z.string().refine(isClass),
});

export type Species = z.infer<typeof speciesSchema>;

const species = {
  africanGrey: {
    name: "African Grey",
    scientificName: "Psittacus erithacus",
    iucn: { id: 22724813, status: "EN/decreasing" },
    native: {
      text: "Equatorial Africa (dense forests)",
      source: "https://en.wikipedia.org/wiki/African_grey_parrot",
    },
    lifespan: {
      wild: 23,
      captivity: 60,
      source: "https://en.wikipedia.org/wiki/African_grey_parrot",
    },
    class: "aves",
  },
  blueFrontedAmazon: {
    name: "Blue-fronted Amazon",
    scientificName: "Amazona aestiva",
    iucn: { id: 22686332, status: "NT/decreasing" },
    native: {
      text: "South America (tropical rainforests)",
      source: "https://en.wikipedia.org/wiki/Blue-fronted_amazon",
    },
    lifespan: {
      captivity: 60,
      source: "https://animaldiversity.org/accounts/Amazona_aestiva/",
    },
    class: "aves",
  },
  bullfrogAfrican: {
    name: "African Bullfrog",
    scientificName: "Pyxicephalus adspersus",
    iucn: { id: 58535, status: "LC/decreasing" },
    native: {
      text: "Sub-Saharan Africa (dry savanna, freshwater lakes, marshes, etc.)",
      source: "https://en.wikipedia.org/wiki/African_bullfrog",
    },
    lifespan: {
      captivity: 35,
      source: "https://en.wikipedia.org/wiki/African_bullfrog",
    },
    class: "amphibia",
  },

  chickenAmeraucana: {
    name: "Ameraucana Chicken",
    scientificName: "Gallus gallus domesticus",
    iucn: { id: null, status: "NE" },
    native: {
      text: "North America (domesticated)",
      source: "https://en.wikipedia.org/wiki/Chicken",
    },
    lifespan: {
      captivity: 8,
      source: "https://animal-world.com/olive-egger-chickens/",
    },
    class: "aves",
  },
  chickenBantamSilkie: {
    name: "Bantam Silkie Chicken",
    scientificName: "Gallus gallus domesticus",
    iucn: { id: null, status: "NE" },
    native: {
      text: "China (Domesticated)",
      source: "https://en.wikipedia.org/wiki/Silkie",
    },
    lifespan: {
      captivity: { min: 7, max: 9 },
      source: "https://animal-world.com/silkie-chicken/",
    },
    class: "aves",
  },
  chickenCochin: {
    name: "Cochin Chicken",
    scientificName: "Gallus gallus domesticus",
    iucn: { id: null, status: "NE" },
    native: {
      text: "China (Domesticated)",
      source: "https://en.wikipedia.org/wiki/Cochin_chicken",
    },
    lifespan: {
      captivity: { min: 8, max: 10 },
      source: "https://www.sfzoo.org/cochin-chicken/",
    },
    class: "aves",
  },
  chickenHalfBrahmaHalfSaipan: {
    name: "Half Dark Brahma, Half Saipan Chicken",
    scientificName: "Gallus gallus domesticus",
    iucn: { id: null, status: "NE" },
    native: {
      text: "North America (domesticated)",
      source: "https://en.wikipedia.org/wiki/Chicken",
    },
    lifespan: {
      captivity: { min: 5, max: 8 },
      source: "https://animal-world.com/brahma-chicken/",
    },
    class: "aves",
  },
  chickenJerseyGiant: {
    name: "Jersey Giant Chicken",
    scientificName: "Gallus gallus domesticus",
    iucn: { id: null, status: "NE" },
    native: {
      text: "United States (Domesticated)",
      source: "https://en.wikipedia.org/wiki/Jersey_Giant",
    },
    lifespan: {
      captivity: { min: 6, max: 7 },
      source: "https://animal-world.com/jersey-giant-chicken/",
    },
    class: "aves",
  },
  chickenOliveEgger: {
    name: "Olive Egger Chicken",
    scientificName: "Gallus gallus domesticus",
    iucn: { id: null, status: "NE" },
    native: {
      text: "North America (domesticated)",
      source: "https://en.wikipedia.org/wiki/Chicken",
    },
    lifespan: {
      captivity: 8,
      source: "https://animal-world.com/olive-egger-chickens/",
    },
    class: "aves",
  },

  chinchilla: {
    name: "Chinchilla",
    scientificName: "Chinchilla lanigera",
    iucn: { id: 4652, status: "EN/decreasing" },
    native: {
      text: "Andes Mountains, South America (Domesticated)",
      source: "https://en.wikipedia.org/wiki/Chinchilla",
    },
    lifespan: {
      wild: 10,
      captivity: 20,
      source: "https://en.wikipedia.org/wiki/Chinchilla",
    },
    class: "mammalia",
  },

  cockroachMadagascarHissing: {
    name: "Madagascar Hissing Cockroaches",
    scientificName: "Gromphadorhina portentosa",
    iucn: { id: null, status: "NE" },
    native: {
      text: "Madagascar",
      source: "https://en.wikipedia.org/wiki/Gromphadorhina_portentosa",
    },
    lifespan: {
      captivity: 3,
      source: "https://en.wikipedia.org/wiki/Madagascar_hissing_cockroach",
    },
    class: "insecta",
  },

  cowRedAngusBeef: {
    name: "Red Angus Beef Cow",
    scientificName: "Bos (primigenius) taurus",
    iucn: { id: null, status: "NE" },
    native: {
      text: "Australia, United States (domesticated)",
      source: "https://en.wikipedia.org/wiki/Red_Angus",
    },
    lifespan: {
      captivity: { min: 12, max: 25 },
      source: "https://animal-world.com/red-angus-cattle-breed/",
    },
    class: "mammalia",
  },

  crowAmerican: {
    name: "American Crow",
    scientificName: "Corvus brachyrhynchos",
    iucn: { id: 22705990, status: "LC/increasing" },
    native: {
      text: "North America (forests)",
      source: "https://en.wikipedia.org/wiki/American_crow",
    },
    lifespan: {
      wild: 7,
      captivity: 30,
      source: "https://en.wikipedia.org/wiki/American_crow",
    },
    class: "aves",
  },

  donkeyDomestic: {
    name: "Domestic Donkey",
    scientificName: "Equus africanus asinus",
    iucn: { id: null, status: "NE" },
    native: {
      text: "Worldwide (domesticated)",
      source: "https://en.wikipedia.org/wiki/Donkey",
    },
    lifespan: { captivity: 40, source: "https://en.wikipedia.org/wiki/Donkey" },
    class: "mammalia",
  },

  emu: {
    name: "Emu",
    scientificName: "Dromaius novaehollandiae",
    iucn: { id: 22678117, status: "LC" },
    native: {
      text: "Australia (savannah woodlands and sclerophyll forests)",
      source: "https://en.wikipedia.org/wiki/Emu",
    },
    lifespan: {
      wild: 10,
      captivity: 20,
      source: "https://en.wikipedia.org/wiki/Emu",
    },
    class: "aves",
  },

  falconPrairiePeregrine: {
    name: "Prairie/Peregrine Falcon",
    scientificName: "Falco mexicanus x Falco peregrinus",
    iucn: { id: null, status: "NE" },
    native: {
      text: "Western North America",
      source: "https://en.wikipedia.org/wiki/Prairie_falcon",
    },
    lifespan: {
      wild: { min: 2, max: 5 },
      source: "https://www.ndow.org/species/prairie-falcon/",
    },
    class: "aves",
  },

  foxAmericanRed: {
    name: "American Red Fox",
    scientificName: "Vulpes vulpes fulva",
    iucn: { id: 23062, status: "LC" },
    native: {
      text: "North America",
      source: "https://en.wikipedia.org/wiki/American_red_fox",
    },
    lifespan: {
      wild: 5,
      captivity: 15,
      source: "https://en.wikipedia.org/wiki/Red_fox",
    },
    class: "mammalia",
  },

  isopodRubberDucky: {
    name: "Rubber Ducky Isopods",
    scientificName: "Cubaris sp.",
    iucn: { id: null, status: "NE" },
    native: { text: "Asia", source: "https://en.wikipedia.org/wiki/Cubaris" },
    lifespan: {
      captivity: { min: 2, max: 3 },
      source: "https://bantam.earth/cubaris-rubber-ducky-isopods/",
    },
    class: "malacostraca",
  },

  isopodSpanishOrange: {
    name: "Spanish Orange Isopods",
    scientificName: "Porcellio scaber",
    iucn: { id: null, status: "NE" },
    native: {
      text: "Europe",
      source: "https://en.wikipedia.org/wiki/Porcellio_scaber",
    },
    lifespan: {
      wild: 2,
      source: "https://en.wikipedia.org/wiki/Porcellio_scaber",
    },
    class: "malacostraca",
  },
  isopodZebra: {
    name: "Zebra Isopods",
    scientificName: "Armadillidium maculatum",
    iucn: { id: null, status: "NE" },
    native: {
      text: "Southern France",
      source: "https://en.wikipedia.org/wiki/Armadillidium_maculatum",
    },
    lifespan: {
      captivity: { min: 1, max: 3 },
      source: "https://bantam.earth/zebra-isopods-armadillidium-maculatum/",
    },
    class: "malacostraca",
  },

  macawBlueAndGold: {
    name: "Blue and Gold Macaw",
    scientificName: "Ara ararauna",
    iucn: { id: 22685539, status: "LC/decreasing" },
    native: {
      text: "South America (tropical rainforests)",
      source: "https://en.wikipedia.org/wiki/Blue-and-yellow_macaw",
    },
    lifespan: {
      wild: 50,
      captivity: 70,
      source:
        "https://animaldiversity.org/accounts/Ara_ararauna/#lifespan_longevity",
    },
    class: "aves",
  },
  macawCatalina: {
    name: "Catalina Macaw",
    scientificName: "Ara ararauna x Ara macao",
    iucn: { id: null, status: "NE" },
    native: {
      text: "Usually bred in captivity",
      source: "https://en.wikipedia.org/wiki/Catalina_macaw",
    },
    lifespan: {
      captivity: 70,
      source:
        "https://animaldiversity.org/accounts/Ara_macao/#lifespan_longevity",
    },
    class: "aves",
  },

  marmosetBlackTufted: {
    name: "Black Tufted Marmoset",
    scientificName: "Callithrix penicillata",
    iucn: { id: 41519, status: "LC/decreasing" },
    native: {
      text: "Brazil (Neo-tropical gallery forests)",
      source: "https://en.wikipedia.org/wiki/Black-tufted_marmoset",
    },
    lifespan: { wild: 7, source: "https://animalia.bio/black-tufted-marmoset" },
    class: "mammalia",
  },
  marmosetCommon: {
    name: "Common Marmoset",
    scientificName: "Callithrix jacchus",
    iucn: { id: 41518, status: "LC/decreasing" },
    native: {
      text: "Brazil",
      source: "https://en.wikipedia.org/wiki/Common_marmoset",
    },
    lifespan: {
      wild: { min: 5, max: 7 },
      source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3775658/",
    },
    class: "mammalia",
  },

  millipedeSmokeyGhost: {
    name: "Smokey Ghost Millipede",
    scientificName: "Narceus gordanus",
    iucn: { id: null, status: "NE" },
    native: {
      text: "Eastern United States",
      source: "https://en.wikipedia.org/wiki/Narceus_gordanus",
    },
    lifespan: {
      captivity: 11,
      source: "https://www.whatsthatbug.com/how-to-care-for-a-millipede/",
    },
    class: "diplopoda",
  },

  pythonBall: {
    name: "Ball Python",
    scientificName: "Python regius",
    iucn: { id: 177562, status: "NT/decreasing" },
    native: {
      text: "West Sub Saharan Africa (grasslands, savannas, sparsely wooded areas)",
      source: "https://en.wikipedia.org/wiki/Ball_python",
    },
    lifespan: {
      captivity: { min: 15, max: 30 },
      source: "https://en.wikipedia.org/wiki/Ball_python",
    },
    class: "reptilia",
  },

  pythonCoastalCarpet: {
    name: "Coastal Carpet Python",
    scientificName: "Morelia spilota mcdowelli",
    iucn: { id: 62232, status: "LC/decreasing" },
    native: {
      text: "Australia (suburban area, rainforests, forests, etc.)",
      source: "https://en.wikipedia.org/wiki/Carpet_python",
    },
    lifespan: {
      captivity: 30,
      source: "https://en.wikipedia.org/wiki/Morelia_spilota",
    },
    class: "reptilia",
  },

  ratDomestic: {
    name: "Domestic Rat",
    scientificName: "Rattus norvegicus f. domestica",
    iucn: { id: 19353, status: "LC" },
    native: {
      text: "Worldwide (Domesticated)",
      source: "https://en.wikipedia.org/wiki/Fancy_rat",
    },
    lifespan: {
      captivity: { min: 2, max: 3 },
      source: "https://en.wikipedia.org/wiki/Fancy_rat",
    },
    class: "mammalia",
  },

  scorpionEmperor: {
    name: "Emperor Scorpion",
    scientificName: "Pandinus imperator",
    iucn: { id: null, status: "NE" },
    native: {
      text: "Africa (rainforests, savannas)",
      source: "https://en.wikipedia.org/wiki/Pandinus_imperator",
    },
    lifespan: {
      wild: { min: 6, max: 8 },
      source: "https://en.wikipedia.org/wiki/Emperor_scorpion",
    },
    class: "arachnida",
  },

  skinkBlueTongued: {
    name: "Blue-tongued Skink",
    scientificName: "Tiliqua scincoides intermedia",
    iucn: { id: 109481538, status: "LC" },
    native: {
      text: "Australia",
      source: "https://en.wikipedia.org/wiki/Blue-tongued_skink",
    },
    lifespan: {
      captivity: 20,
      source: "https://en.wikipedia.org/wiki/Blue-tongued_skink",
    },
    class: "reptilia",
  },

  tortoiseSulcata: {
    name: "Sulcata Tortoise",
    scientificName: "Centrochelys sulcata",
    iucn: { id: 163423, status: "EN/decreasing" },
    native: {
      text: "Sahara Desert and the Sahel (shrubland, grassland)",
      source: "https://en.wikipedia.org/wiki/African_spurred_tortoise",
    },
    lifespan: {
      wild: 75,
      captivity: 100,
      source: "https://en.wikipedia.org/wiki/African_spurred_tortoise",
    },
    class: "reptilia",
  },

  vinegaroon: {
    name: "Vinegaroon",
    scientificName: "Mastigoproctus tohono",
    iucn: { id: null, status: "NE" },
    native: {
      text: "Tropical and subtropical areas, excluding Europe and Australia",
      source: "https://en.wikipedia.org/wiki/Vinegaroon",
    },
    lifespan: { wild: 8, source: "https://en.wikipedia.org/wiki/Uropygi" },
    class: "arachnida",
  },

  wolfHybrid: {
    name: "Wolf Hybrid",
    scientificName: "Canis lupus x Canis familiaris",
    iucn: { id: 3746, status: "LC" },
    native: {
      text: "Eurasia and North America (forests, inland wetlands, shrublands, grasslands (including Arctic tundra), pastures, deserts, and rocky peaks on mountains)",
      source: "https://en.wikipedia.org/wiki/Wolf",
    },
    lifespan: {
      captivity: { min: 12, max: 14 },
      source:
        "https://wolf.org/wolf-info/basic-wolf-info/wolves-and-humans/wolf-dog-hybrids/",
    },
    class: "mammalia",
  },
} as const satisfies Record<string, Species>;

export type SpeciesKey = keyof typeof species;

export const isSpecies = (str: string): str is SpeciesKey =>
  Object.keys(species).includes(str);

export const getSpecies = (key: SpeciesKey): Species => species[key];
