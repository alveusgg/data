import { z } from "zod";

export const lifespanSchema = z.object({
  wild: z
    .union([z.number(), z.object({ min: z.number(), max: z.number() })])
    .optional(),
  captivity: z
    .union([z.number(), z.object({ min: z.number(), max: z.number() })])
    .optional(),
  source: z.string(),
});

export type Lifespan = z.infer<typeof lifespanSchema>;

const lifespans = {
  emu: {
    wild: 10,
    captivity: 20,
    source: "https://en.wikipedia.org/wiki/Emu",
  },
  africanBullfrog: {
    captivity: 35,
    source: "https://en.wikipedia.org/wiki/African_bullfrog",
  },
  blueAndGoldMacaw: {
    wild: 50,
    captivity: 70,
    source:
      "https://animaldiversity.org/accounts/Ara_ararauna/#lifespan_longevity",
  },
  catalinaMacaw: {
    captivity: 70,
    source:
      "https://animaldiversity.org/accounts/Ara_macao/#lifespan_longevity",
  },
  africanGrey: {
    wild: 23,
    captivity: 60,
    source: "https://en.wikipedia.org/wiki/African_grey_parrot",
  },
  blueFrontedAmazon: {
    captivity: 60,
    source: "https://animaldiversity.org/accounts/Amazona_aestiva/",
  },
  americanCrow: {
    wild: 7,
    captivity: 30,
    source: "https://en.wikipedia.org/wiki/American_crow",
  },
  oliveEggerChicken: {
    captivity: 8,
    source: "https://animal-world.com/olive-egger-chickens/",
  },
  brahmaChicken: {
    captivity: { min: 5, max: 8 },
    source: "https://animal-world.com/brahma-chicken/",
  },
  redAngusBeefCow: {
    captivity: { min: 12, max: 25 },
    source: "https://animal-world.com/red-angus-cattle-breed/",
  },
  coastalCarpetPython: {
    captivity: 30,
    source: "https://en.wikipedia.org/wiki/Morelia_spilota",
  },
  ballPython: {
    captivity: { min: 15, max: 30 },
    source: "https://en.wikipedia.org/wiki/Ball_python",
  },
  americanRedFox: {
    wild: 5,
    captivity: 15,
    source: "https://en.wikipedia.org/wiki/Red_fox",
  },
  domesticDonkey: {
    captivity: 40,
    source: "https://en.wikipedia.org/wiki/Donkey",
  },
  chinchilla: {
    wild: 10,
    captivity: 20,
    source: "https://en.wikipedia.org/wiki/Chinchilla",
  },
  smokeyGhostMillipede: {
    captivity: 11,
    source: "https://www.whatsthatbug.com/how-to-care-for-a-millipede/",
  },
  madagascarHissingCockroaches: {
    captivity: 3,
    source: "https://en.wikipedia.org/wiki/Madagascar_hissing_cockroach",
  },
  zebraIsopods: {
    captivity: { min: 1, max: 3 },
    source: "https://bantam.earth/zebra-isopods-armadillidium-maculatum/",
  },
  spanishOrangeIsopods: {
    wild: 2,
    source: "https://en.wikipedia.org/wiki/Porcellio_scaber",
  },
  wolfHybrid: {
    captivity: { min: 12, max: 14 },
    source:
      "https://wolf.org/wolf-info/basic-wolf-info/wolves-and-humans/wolf-dog-hybrids/",
  },
  blackTuftedMarmoset: {
    wild: 7,
    source: "https://animalia.bio/black-tufted-marmoset",
  },
  commonMarmoset: {
    wild: { min: 5, max: 7 },
    source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3775658/",
  },
  emperorScorpion: {
    wild: { min: 6, max: 8 },
    source: "https://en.wikipedia.org/wiki/Emperor_scorpion",
  },
  domesticRat: {
    captivity: { min: 2, max: 3 },
    source: "https://en.wikipedia.org/wiki/Fancy_rat",
  },
  sulcataTortoise: {
    wild: 75,
    captivity: 100,
    source: "https://en.wikipedia.org/wiki/African_spurred_tortoise",
  },
  blueTonguedSkink: {
    captivity: 20,
    source: "https://en.wikipedia.org/wiki/Blue-tongued_skink",
  },
  bantamSilkieChicken: {
    captivity: { min: 7, max: 9 },
    source: "https://animal-world.com/silkie-chicken/",
  },
  prairiePeregrineFalcon: {
    wild: { min: 2, max: 5 },
    source: "https://www.ndow.org/species/prairie-falcon/",
  },
  vinegaroon: {
    wild: 8,
    source: "https://en.wikipedia.org/wiki/Uropygi",
  },
  jerseyGiantChicken: {
    captivity: { min: 6, max: 7 },
    source: "https://animal-world.com/jersey-giant-chicken/",
  },
  rubberDuckyIsopods: {
    captivity: { min: 2, max: 3 },
    source: "https://bantam.earth/cubaris-rubber-ducky-isopods/",
  },
} as const satisfies Record<string, Lifespan>;

export default lifespans;
