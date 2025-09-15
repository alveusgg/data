import { z } from "zod";

import { enclosureKeySchema } from "../enclosures";
import { partialDateStringSchema } from "../types";
import { speciesKeySchema } from "./species";

export const ambassadorSchema = z.object({
  name: z.string(),
  alternate: z.array(z.string()).readonly(),
  commands: z.array(z.string()).readonly(),
  species: speciesKeySchema,
  sex: z.literal(["Male", "Female"]).nullable(),
  birth: partialDateStringSchema.nullable(),
  arrival: partialDateStringSchema.nullable(),
  retired: partialDateStringSchema.nullable(),
  enclosure: enclosureKeySchema,
  story: z.string(),
  mission: z.string(),
  fact: z.string().optional(),
  clips: z
    .array(
      z.object({
        id: z.string(),
        caption: z.string(),
      }),
    )
    .readonly(),
  homepage: z
    .object({
      title: z.string(),
      description: z.string(),
    })
    .nullable(),
  plush: z
    .union([
      z.object({
        link: z.string(),
      }),
      z.object({
        soon: z.string(),
      }),
    ])
    .nullable(),
});

export type Ambassador = z.infer<typeof ambassadorSchema>;

const ambassadors = {
  // Active ambassadors
  stompy: {
    name: "Stompy",
    alternate: [],
    commands: ["stompy"],
    species: "emu",
    sex: "Male",
    birth: "2021-02-14",
    arrival: "2021-06-01",
    retired: null,
    enclosure: "emus",
    story:
      "Stompy was hatched in captivity and was hand raised by Maya to be the first Alveus ambassador.",
    mission:
      "He is an ambassador for teaching about the exotic meat trade, traditional medicine, and the use of animal products in cosmetics.",
    fact: "Emus are terrestrial birds that walk on two legs and have three toes, characteristics that also belong to an extinct group of dinosaurs called theropods, which include the Tyrannosaurus rex and Velociraptor.\n\nStompy's long legs and specialized musculature allow him to run efficiently while also maintaining high speeds of around 30 mph.",
    // Fact source: https://www.entomoljournal.com/archives/2020/vol8issue2/PartE/8-1-233-269.pdf
    clips: [
      {
        id: "GsBRS13e8mY",
        caption: "Stompy's Story At Alveus",
      },
      {
        id: "fsADzOeGHDI",
        caption: "Stompy Enjoying Scritches From Kayla",
      },
      {
        id: "8UVfWxKvIc8",
        caption: "Stompy Running In The Pasture",
      },
      {
        id: "UtgQd-R4bZc",
        caption: "Callback: Baby Stompy",
      },
    ],
    homepage: {
      title: "Stompy!",
      description:
        "He is an ambassador for how the exotic meat trade & use of animal products in cosmetics has affected his species and many others.",
    },
    plush: {
      link: "https://youtooz.com/products/stompy-plush-9-inch",
    },
  },
  georgie: {
    name: "Georgie",
    alternate: [],
    commands: ["georgie"],
    species: "bullfrogAfrican",
    sex: "Male",
    birth: "2021",
    arrival: "2021-04",
    retired: null,
    enclosure: "reptiles",
    story:
      "Georgie was part of an educational program at a zoo and was rehomed to Alveus.",
    mission:
      "He is an ambassador for the wildlife trade and how chytrid fungus is affecting amphibian species worldwide.",
    fact: "African Bullfrogs, like many other amphibians, have semipermeable skin that allows them to absorb water and oxygen. This adaptation is super important to allow them to drink and breathe while they're underwater or buried in the mud.\n\nUnfortunately, this also means that they can absorb any harmful chemicals in their environment, which is why it is so important to keep pollution and litter out of our waterways!",
    // Fact source: https://www.nps.gov/hosp/learn/nature/amphibians.htm
    clips: [
      { id: "4WpuyhCXTTs", caption: "Georgie's Journey At Alveus" },
      { id: "YNHssqn1O40", caption: "Georgie Gets Fed By ConnorEatsPants" },
      { id: "pjfNXZxmQ2M", caption: "Georgie Poops In His New Enclosure" },
      { id: "NlHmTLHHcKg", caption: "Georgie Actually Does A Backflip" },
      { id: "_kt-VaruYJo", caption: "Georgie Goes For A Swim" },
    ],
    homepage: {
      title: "Georgie!",
      description:
        "He is here to teach all about threats to his species and to amphibians worldwide.",
    },
    plush: {
      link: "https://youtooz.com/products/georgie-plush-9-inch",
    },
  },
  tico: {
    name: "Tico",
    alternate: [],
    commands: ["tico"],
    species: "macawBlueAndGold",
    sex: "Female",
    birth: null,
    arrival: "2021-04",
    retired: null,
    enclosure: "parrots",
    story:
      "Tico was rehomed to Alveus as the previous sanctuary's owner was retiring.",
    mission:
      "She is an ambassador for how the pet trade has affected her parrot species and many others around the world.",
    fact: 'At dawn and dusk, one of Tico\'s behaviors includes very loud calls that can exceed 100 dB, an intensity that can cause hearing loss due to prolonged exposure.\n\nIn the wild, blue and gold macaws vocalize at dawn and dusk to communicate with other members of their flock as a "check-in" measure. In captivity, these vocalizations can become bothersome and harmful to humans because of their intensity.',
    // Fact source: https://onlinelibrary.wiley.com/doi/book/10.1002/9780470344651#page=168
    clips: [
      { id: "7Zqpoxpm0aQ", caption: "Training With Tico And Kayla" },
      { id: "du1TIuJ6BAk", caption: "Tico Dancing With Kayla" },
    ],
    homepage: null,
    plush: null,
  },
  miley: {
    name: "Miley",
    alternate: ["Miele"],
    commands: ["miley", "miele"],
    species: "macawCatalina",
    sex: "Female",
    birth: null,
    arrival: "2021-04",
    retired: null,
    enclosure: "parrots",
    story:
      "Miley was rehomed to Alveus as the previous sanctuary's owner was retiring.",
    mission:
      "She is an ambassador for how the pet trade has affected her parrot species and many others around the world.",
    fact: "In captivity, Catalina macaws like Miley require a lot of mental stimulation in the form of environmental enrichment. Without access to enrichment opportunities, these birds can become frustrated and destructive to their surroundings, including chewing through solid wood, which is yet another reason why they shouldn't be kept as pets.",
    // Fact source: https://www.sciencedirect.com/science/article/abs/pii/S0168159116301058
    clips: [{ id: "HEcrzoXofB8", caption: "Maya Gives Miley A Bath" }],
    homepage: null,
    plush: null,
  },
  mia: {
    name: "Mia",
    alternate: [],
    commands: ["mia"],
    species: "africanGrey",
    sex: "Female",
    birth: null,
    arrival: "2021-04",
    retired: null,
    enclosure: "parrots",
    story:
      "Mia was rehomed to Alveus as the previous sanctuary's owner was retiring.",
    mission:
      "She is an ambassador for how the pet trade has affected her parrot species and many others around the world.",
    fact: 'African greys are both smart and social. They are known to use different sets of sounds/words depending on the social situation. This can be seen in Mia using more beeps, whistles, and bird calls when humans aren\'t present, but more "Hello"s, "Bye"s, and explosions when keepers are around.',
    // Fact source: Colbert-White EN, Covington MA, Fragaszy DM. Social context influences the vocalizations of a home-raised African Grey parrot (Psittacus erithacus erithacus). J Comp Psychol. 2011 May;125(2):175-84. doi: 10.1037/a0022097. PMID: 21381810.
    clips: [
      { id: "nIw-qTRT5Nc", caption: "Mia Dances With Connor" },
      { id: "KRJy_nR1u5k", caption: "Mia Walks Around The Aviary" },
      { id: "E5mEGGIv5jA", caption: "Mia Shows Of Her Many Talents" },
      { id: "bj0YavBUAsc", caption: "Bomb Explodes At Alveus" },
      { id: "5ETmZ7oafo4", caption: "Mia Makes A Car Alarm Sound" },
    ],
    homepage: null,
    plush: null,
  },
  siren: {
    name: "Siren",
    alternate: [],
    commands: ["siren"],
    species: "blueFrontedAmazon",
    sex: "Female",
    birth: null,
    arrival: "2021-04",
    retired: null,
    enclosure: "parrots",
    story:
      "Siren was rehomed to Alveus as the previous sanctuary's owner was retiring.",
    mission:
      "She is an ambassador for how the pet trade has affected her parrot species and many others around the world.",
    clips: [
      { id: "ociryM83xIo", caption: "Siren Is Given Enrichment" }, // This is a Maya clip
      { id: "ynv06rC9aHM", caption: "Siren Talks, Sings, And More" },
      { id: "n8OFY1UN3S0", caption: "Sea Shanty Duet With Kayla & Siren" },
      { id: "si3puzE6ypE", caption: "Siren Zooming To Her Enrichment" },
      { id: "LqpK1DhBH-E", caption: "Siren Sings A Song" },
      { id: "0foatCEQ5vk", caption: "Siren Has A Conversation" },
    ],
    homepage: null,
    plush: {
      link: "https://youtooz.com/products/siren-plush-9-inch",
    },
  },
  abbott: {
    name: "Abbott",
    alternate: [],
    commands: ["abbott"],
    species: "crowAmerican",
    sex: "Male",
    birth: "2020-05",
    arrival: "2021-08",
    retired: null,
    enclosure: "crows",
    story:
      "Abbott was brought into a wildlife rehab center as a baby. He imprinted during the rehab process and then was deemed non-releasable.",
    mission:
      "He is an ambassador for educating people on the misconceptions that wildlife face as well as human-wildlife conflict.",
    fact: "American crows are considered to be occasional tool users in the wild, a trait that was once thought to be unique to humans, and in captivity, they are capable of learning how to use a variety of tools.\n\nOne of the skills Abbott has learned through training sessions involves retrieving and stacking rings onto a stationary post.",
    // Fact source: https://www.nature.com/articles/s41467-023-42203-8
    clips: [
      { id: "GqvK9m6yoBQ", caption: "Abbott Explores His New Enrichment" },
    ],
    homepage: null,
    plush: null,
  },
  coconut: {
    name: "Coconut",
    alternate: [],
    commands: ["coconut"],
    species: "crowAmerican",
    sex: "Male",
    birth: "2021",
    arrival: "2021-08",
    retired: null,
    enclosure: "crows",
    story:
      "Coconut was brought into a wildlife rehab center as a baby. He imprinted during the rehab process and then was deemed non-releasable.",
    mission:
      "He is an ambassador for educating people on the misconceptions that wildlife face as well as human-wildlife conflict.",
    clips: [],
    homepage: null,
    plush: null,
  },
  oliver: {
    name: "Oliver",
    alternate: [],
    commands: ["oliver"],
    species: "chickenOliveEgger",
    sex: "Male",
    birth: "2021",
    arrival: "2021-06",
    retired: null,
    enclosure: "chickens",
    story: "Oliver was put in the reject/return cage at a local feed store.",
    mission:
      "He is an ambassador for the agricultural industry and how people can use consumer choice to impact the environment in a positive way.",
    clips: [],
    homepage: null,
    plush: null,
  },
  nugget: {
    name: "Nugget",
    alternate: [],
    commands: ["nugget"],
    species: "chickenAmeraucana",
    sex: "Female",
    birth: "2019",
    arrival: "2021-04",
    retired: null,
    enclosure: "chickens",
    story:
      "Nugget was rehomed to Alveus because she was bullied by hens in her previous flock.",
    mission:
      "She is an ambassador for the agricultural industry and how people can use consumer choice to impact the environment in a positive way.",
    clips: [{ id: "GcPu01J0G-Q", caption: "Nugget Belongs In A Circus" }],
    homepage: null,
    plush: null,
  },
  henrique: {
    name: "Henrique",
    alternate: [],
    commands: ["henrique"],
    species: "chickenHalfBrahmaHalfSaipan",
    sex: "Female",
    birth: "2020",
    arrival: "2022-08",
    retired: null,
    enclosure: "chickens",
    story: "Henrique was rehomed from a local farm.",
    mission:
      "She is an ambassador for the agricultural industry and how people can use consumer choice to impact the environment in a positive way.",
    fact: "The closest wild relative of domestic chickens, like Henrique, are red junglefowl. While our commercial layers have been selectively bred to lay over 300 eggs per year, their wild counterparts only lay around 12 eggs per year.\n\nThe difference in egg yield between the two species highlights the impact that selective breeding can have on the process of domestication.",
    // Fact source: https://doi.org/10.1016/j.psj.2023.102489
    clips: [],
    homepage: null,
    plush: null,
  },
  betty: {
    name: "Betty",
    alternate: [],
    commands: ["betty"],
    species: "chickenCochin",
    sex: "Female",
    birth: null,
    arrival: "2024-09",
    retired: null,
    enclosure: "chickens",
    story: "Betty was rehomed from a local farm.",
    mission:
      "She is an ambassador for the agricultural industry and how people can use consumer choice to impact the environment in a positive way.",
    clips: [],
    homepage: null,
    plush: null,
  },
  polly: {
    name: "Polly",
    alternate: [],
    commands: ["polly"],
    species: "chickenBantamSilkie",
    sex: "Female",
    birth: null,
    arrival: "2023-11", // Previously 2022-08 to 2022-11
    retired: null,
    enclosure: "nutrition",
    story: "Polly was rehomed from another owner.",
    mission:
      "She is an ambassador for the agricultural industry and how people can use consumer choice to impact the environment in a positive way.",
    clips: [],
    homepage: null,
    plush: null,
  },
  winnieTheMoo: {
    name: "Winnie (The Moo)",
    alternate: [],
    commands: ["winnie"],
    species: "cowRedAngusBeef",
    sex: "Female",
    birth: "2022-03-22",
    arrival: "2022-04",
    retired: null,
    enclosure: "pasture",
    story: "Winnie came from a cattle operation in Oklahoma.",
    mission:
      "She is an ambassador for the beef industry and how people can use their consumer choice to impact the environment in a positive way.",
    fact: "Before arriving at Alveus, Winnie was part of a cattle operation as a Red Angus Beef Cow. The massive demand for beef around the world has led to vast deforestation and land clearing to provide space for cattle farming, resulting in habitat loss in critical ecosystems like the Amazon Rainforest, as well as the methane generated contributing to global warming.",
    // Fact source: https://www.thebureauinvestigates.com/stories/2023-06-02/almost-a-billion-trees-felled-to-feed-appetite-for-brazilian-beef
    clips: [
      { id: "FKU7-u5-L24", caption: "Winnie Causes Chaos In The Grain Stall" },
      { id: "qWDd5nnWSuI", caption: "Winnie's First Day On Stream" },
    ],
    homepage: null,
    plush: {
      link: "https://youtooz.com/products/winnie-plush-9-inch",
    },
  },
  serrano: {
    name: "Serrano",
    alternate: [],
    commands: ["serrano"],
    species: "donkeyDomestic",
    sex: "Male",
    birth: null,
    arrival: "2021-05",
    retired: null,
    enclosure: "pasture",
    story: "Rehomed to Alveus from a local equine rescue.",
    mission:
      "Serrano is an ambassador for the wildlife trade and use of wild animals in traditional medicine.",
    clips: [
      { id: "D0daZV1P3AM", caption: "Donkeys Fighting For The Ball" },
      { id: "81Zrv7veNMY", caption: "The Donkeys Play With A Ball At Night" },
      { id: "P_bDfL4pCTc", caption: "Serrano Wants Food. NOW" },
      { id: "YWNRdnNleXw", caption: "Serrano Enjoying A Popsicle" },
    ],
    homepage: null,
    plush: null,
  },
  jalapeno: {
    name: "Jalapeño",
    alternate: [],
    commands: ["jalapeno", "jalapeño"],
    species: "donkeyDomestic",
    sex: "Male",
    birth: null,
    arrival: "2021-05",
    retired: null,
    enclosure: "pasture",
    story: "Rehomed to Alveus from a local equine rescue.",
    mission:
      "Jalapeño is an ambassador for the wildlife trade and use of wild animals in traditional medicine.",
    clips: [
      { id: "D0daZV1P3AM", caption: "Donkeys Fighting For The Ball" },
      { id: "81Zrv7veNMY", caption: "The Donkeys Play With A Ball At Night" },
    ],
    homepage: null,
    plush: null,
  },
  fenn: {
    name: "Fenn",
    alternate: [],
    commands: ["fenn"],
    species: "foxAmericanRed",
    sex: "Male",
    birth: "2020",
    arrival: "2022-11",
    retired: null,
    enclosure: "foxes",
    story:
      "Fenn was confiscated from the illegal pet trade by California Department of Fish and Wildlife. He was then rehomed to Alveus.",
    mission:
      "He is an ambassador for the exploitation of wildlife in the pet trade and the fur trade.",
    fact: "While Fenn has dark grey fur, he is an American Red Fox. His different coat color is due to selective breeding orchestrated by humans for both the illegal pet trade and the fur trade. Selective breeding results in a higher chance of genetic defects and a smaller pool of genetic diversity, and the conditions animals bred for the fur trade are subjected to are often inhumane.",
    // Fact source: https://www.humaneworld.org/en/blog/undercover-investigation-fur-farm-cruelty
    clips: [
      { id: "670RYU2Xw98", caption: "Fenn Digs Up A Friend In The Enclosure" },
      { id: "awX8PnOfhQA", caption: "Fenn Finds A Well Hidden Treasure" },
      { id: "ScccoAPYPB0", caption: "Fenn The Fox ASMR" },
      {
        id: "9HbrUaQzhXI",
        caption: "The Foxes Are Excited To Be Reunited",
      },
    ],
    homepage: null,
    plush: null,
  },
  reed: {
    name: "Reed",
    alternate: [],
    commands: ["reed"],
    species: "foxAmericanRed",
    sex: "Male",
    birth: "2019",
    arrival: "2022-11",
    retired: null,
    enclosure: "foxes",
    story:
      "Reed was orphaned as a wild kit and was rescued to be raised at a zoo to be an educational ambassador. He was then rehomed to Alveus.",
    mission:
      "He is an ambassador for the exploitation of wildlife in the pet trade and the fur trade.",
    fact: "Foxes like Reed may look cute, but make for terrible pets. Foxes have a distinct musky smell, often described as similar to a skunk's, and their natural behaviors include frequently urinating and defecating to mark their territory. Foxes also enjoy digging as their dens are underground and can easily dig escape routes.",
    // Fact source: https://www.nature.org/content/dam/tnc/nature/en/documents/UT_WingsWater_WetlandsMammals_Jan19.pdf
    clips: [
      { id: "ClWtgsoWta0", caption: "Reed Gets Weighed With Target Training" },
      { id: "4HZMQJoEkVA", caption: "Reed Is The Best Boy" },
      {
        id: "9HbrUaQzhXI",
        caption: "The Foxes Are Excited To Be Reunited",
      },
    ],
    homepage: null,
    plush: null,
  },
  awa: {
    name: "Awa",
    alternate: [],
    commands: ["awa"],
    species: "wolfHybrid",
    sex: "Female",
    birth: "2014",
    arrival: "2024-05-04",
    retired: null,
    enclosure: "wolves",
    story:
      "Awa was rescued from a facility that has received numerous USDA citations based on violations of the Animal Welfare Act.",
    mission:
      "She is an ambassador for educating people about responsible pet ownership, the historic persecution of wolves by humans, and the importance of wolves as keystone species in their ecosystems.",
    clips: [],
    homepage: null,
    plush: null,
  },
  akela: {
    name: "Akela",
    alternate: [],
    commands: ["akela", "akila"],
    species: "wolfHybrid",
    sex: "Male",
    birth: "2018-01-26",
    arrival: "2025-01-27",
    retired: null,
    enclosure: "wolves",
    story:
      "Akela was originally purchased for breeding by a private owner. For several years, he was left to live entirely on his own before being rehomed to Alveus.",
    mission:
      "He is an ambassador for educating people about responsible pet ownership, the historic persecution of wolves by humans, and the importance of wolves as keystone species in their ecosystems.",
    clips: [],
    homepage: null,
    plush: null,
  },
  snork: {
    name: "Snork",
    alternate: [],
    commands: ["snork"],
    species: "chinchilla",
    sex: "Female",
    birth: "2021",
    arrival: "2021-04",
    retired: null,
    enclosure: "nutrition",
    story:
      "Snork was part of an educational program at a zoo and was rehomed to Alveus.",
    mission:
      "She is an ambassador for the exploitation of wildlife in the fur trade.",
    fact: "At 20,000 hairs per square centimeter, chinchillas have the densest fur of all living terrestrial mammals! Because of this density, their fur is incredibly soft but makes them susceptible to overheating easily in temperatures over 80°F (26°C).",
    // Fact source: https://www.medvet.com/chinchilla-history-care-sheet/
    clips: [{ id: "djDIUl2c0v8", caption: "Moomin Steals A Stick From Snork" }],
    homepage: null,
    plush: null,
  },
  moomin: {
    name: "Moomin",
    alternate: [],
    commands: ["moomin"],
    species: "chinchilla",
    sex: "Male",
    birth: "2017",
    arrival: "2021-04",
    retired: null,
    enclosure: "nutrition",
    story: "Moomin was rehomed from a local pet owner.",
    mission:
      "He is an ambassador for the exploitation of wildlife in the fur trade.",
    fact: "Because of their very dense and soft fur, chinchillas have often been used in the fur trade. It can take upwards of 100 chinchilla pelts to make a single fur coat. Chinchillas are currently endangered because they have been poached for their pelts, as well as due to habitat loss.",
    // Fact source: https://www.iucnredlist.org/species/4651/22191157
    clips: [{ id: "djDIUl2c0v8", caption: "Moomin Steals A Stick From Snork" }],
    homepage: {
      title: "Moomin is Movin' In!",
      description:
        "He is an ambassador for how the fur trade has affected his species and many others.",
    },
    plush: null,
  },
  momo: {
    name: "Momo",
    alternate: [],
    commands: ["momo"],
    species: "marmosetBlackTufted",
    sex: "Male",
    birth: null,
    arrival: "2022-12",
    retired: null,
    enclosure: "marmosets",
    story:
      "Momo was rescued by Alveus after being surrendered to a veterinarian due to neglect.",
    mission:
      "He is an ambassador for the exotic pet trade and how it affects primate species worldwide.",
    clips: [
      { id: "kSC1O1Tqgz8", caption: "The Monkeys Make Their Debut On Stream" },
    ],
    homepage: null,
    plush: null,
  },
  appa: {
    name: "Appa",
    alternate: [],
    commands: ["appa"],
    species: "marmosetCommon",
    sex: "Male",
    birth: null,
    arrival: "2022-12",
    retired: null,
    enclosure: "marmosets",
    story:
      "Appa was rescued by Alveus after being surrendered to a veterinarian due to neglect.",
    mission:
      "He is an ambassador for the exotic pet trade and how it affects primate species worldwide.",
    fact: 'Appa is a "common" or white-tufted marmoset, which is a New World monkey originating from Brazil. The first part of his scientific name, "Callithrix", means beautiful hair. The second part, "jacchus", is after the God Bacchus, who is the god of agriculture, wine, and fertility. Marmosets spread seeds from fruits and nuts as they poop everywhere, helping to populate the vegetation in their area, making it a fitting name and a good reason to not have them as pets.',
    // Fact source: Simple English Wikipedia, https://animaldiversity.org/accounts/Callitrichinae/classification/#Callitrichinae
    clips: [
      { id: "kSC1O1Tqgz8", caption: "The Monkeys Make Their Debut On Stream" },
    ],
    homepage: null,
    plush: null,
  },
  noodle: {
    name: "Noodle",
    alternate: [],
    commands: ["noodle"],
    species: "pythonCoastalCarpet",
    sex: "Female",
    birth: null,
    arrival: "2021-04",
    retired: null,
    enclosure: "reptiles",
    story:
      "Noodle was part of an educational program at a zoo and was rehomed to Alveus.",
    mission:
      "She is an ambassador for how the pet trade and habitat loss has affected hers and many other reptile species worldwide.",
    fact: "Most people think of snakes as a reptile that slithers around on the ground, but coastal carpet pythons like Noodle are an arboreal or semi-arboreal species, meaning they spend a lot of their lives hunting, lounging, and sleeping in trees.\n\nReplicating these environments in captivity can be extremely challenging, and so people should reconsider whether they're able to provide optimal living conditions to an animal before they own one.",
    // Fact source: https://doi.org/10.1093/biolinnean/bly097
    clips: [
      {
        id: "SU3b-ndBZ7M",
        caption: "Noodle Discovers Gravity While Exploring Her Enclosure",
      },
      { id: "H5g9i75AQS4", caption: "Noodle Yawns On Stream" },
    ],
    homepage: null,
    plush: null,
  },
  patchy: {
    name: "Patchy",
    alternate: [],
    commands: ["patchy"],
    species: "pythonBall",
    sex: "Female",
    birth: "2021-08-15",
    arrival: "2021-10",
    retired: null,
    enclosure: "reptiles",
    story:
      "Patchy was rehomed to Alveus from a local breeder after it was discovered that she had a genetic defect and was missing an eye.",
    mission:
      "She is an ambassador for how the pet trade and habitat loss has affected hers and many other reptile species worldwide.",
    fact: "Breeding ball pythons for specific colors and patterns is very popular within the pet trade. However, some of the sought-after traits are linked to genes that can also cause major health issues, including exophthalmos (where the eyes protrude from the head excessively), reduced fertility, wobble syndrome (where the head wobbles from side to side), or even death sometimes.\n\nThese genetic associations highlight the importance of ethical breeding within the pet trade to avoid unnecessary health issues, as can be seen with Patchy and his missing eye.",
    // Fact source: https://doi.org/10.1016/j.jcpa.2022.05.003
    clips: [],
    homepage: null,
    plush: null,
  },
  pushPop: {
    name: "Push Pop",
    alternate: ["Poppy"],
    commands: ["pushpop", "poppy"],
    species: "tortoiseSulcata",
    sex: "Female",
    birth: "2019",
    arrival: "2024-02",
    retired: null,
    enclosure: "tortoise",
    story:
      "Push Pop was bought as a pet and was rehomed when the family moved states. She was then transferred to Alveus.",
    mission:
      "She is an ambassador for teaching the world about the exotic pet trade, habitat loss due to agricultural expansion for cattle, and the gradual effects of climate change on our natural world.",
    clips: [
      { id: "4-eInn7D-xE", caption: "Push Pop's First Time On Stream" },
      {
        id: "0yqMN0X8Ruw",
        caption: "Push Pop Eating For 8 Minutes And 4 Seconds",
      },
    ],
    homepage: null,
    plush: null,
  },
  toasterStrudel: {
    name: "Toaster Strudel",
    alternate: [],
    commands: ["toast", "toaster"],
    species: "skinkBlueTongued",
    sex: null,
    birth: "2022-07-04",
    arrival: "2022-11",
    retired: null,
    enclosure: "reptiles",
    story:
      "Toaster Strudel was part of an educational program at a zoo and was rehomed to Alveus.",
    mission:
      "They are an ambassador for how human development and invasive species can affect natural habitats and native species.",
    fact: "Blue-tongued skinks are aptly named after their blue tongue, which is used in a type of anti-predator behavior called deimatic display. In a species like Toast, deimatic display involves rapid full-tongued movements during an encounter with a predator in hopes that the bright-colored and fast-moving tongue will deter the predator.",
    // Fact source: https://www.jstor.org/stable/44857402
    clips: [],
    homepage: null,
    plush: null,
  },
  hankMrMctrain: {
    name: "Hank Mr. McTrain",
    alternate: ["Hank The Tank Choo Choo Mr. McTrain", "Mr. Conductor Man"],
    commands: ["hank"],
    species: "millipedeSmokeyGhost",
    sex: "Male",
    birth: "2022",
    arrival: "2022-01",
    retired: null,
    enclosure: "critters",
    story:
      "Our smokey ghost millipede was born in captivity and ethically sourced.",
    mission:
      "He is an ambassador for the importance of invertebrates and the misconceptions they face.",
    fact: "Hank, a smokey ghost millipede, is a detritivore who spends a lot of time burrowed in the ground. Having existed on our planet for over 400 million years, the structure of millipede burrows can be differentiated from other burrowing organisms to help identify sediment composition and moisture content in the fossil record, providing us with a better understanding of soil health.",
    // Fact source: https://doi.org/10.26879/395
    clips: [
      { id: "eUOJbijrsCk", caption: "Hank Says Hi To Stream" },
      { id: "D-KMGuj3NfY", caption: "Hank Poops While Being Introduced" },
    ],
    homepage: null,
    plush: null,
  },
  barbaraBakedBean: {
    name: "Barbara / Baked Bean",
    alternate: [],
    commands: ["barbara", "bakedbean"],
    species: "cockroachMadagascarHissing",
    sex: null,
    birth: "2022",
    arrival: "2022-01",
    retired: null,
    enclosure: "critters",
    story:
      "Our cockroach colony was started with 7 roaches that were part of an educational colony at a school in Pennsylvania.",
    mission:
      "They are ambassadors for the importance of invertebrates and the misconceptions they face.",
    clips: [],
    homepage: null,
    plush: null,
  },
  marty: {
    name: "Marty",
    alternate: [],
    commands: ["marty"],
    species: "isopodZebra",
    sex: null,
    birth: "2022",
    arrival: "2022-01",
    retired: null,
    enclosure: "critters",
    story: "Our zebra isopods were born in captivity and ethically sourced.",
    mission:
      "They are ambassadors for the importance of invertebrates and the misconceptions they face.",
    fact: "Zebra isopods are crustaceans named for their black and white stripes that resemble a zebra. These characteristics are unique to Marty's species, but other isopods also have their own distinct and diverse colors, patterns, and sizes. Some can grow to be 16 inches long, while others may be purple, have spots, or even be translucent.",
    // Fact source: https://doi.org/10.7717/peerj.15984
    clips: [],
    homepage: null,
    plush: null,
  },
  bb: {
    name: "BB",
    alternate: ["Bonus Bug"],
    commands: ["bb", "bonusbug"],
    species: "isopodSpanishOrange",
    sex: null,
    birth: "2022",
    arrival: "2022-01",
    retired: null,
    enclosure: "critters",
    story:
      "Our spanish orange isopods were born in captivity and ethically sourced.",
    mission:
      "They are ambassadors for the importance of invertebrates and the misconceptions they face.",
    fact: "Like other detritivores, the ecological role of BB and all Spanish orange isopods in the wild is to break down organic matter like leaf litter. As the isopods are decomposing nutrient-rich leaf litter, they produce feces that accelerate the decomposition of nutrient-poor leaf litter, further relieving the ecosystem of excessive organic matter buildup.",
    // Fact source: https://doi.org/10.1016/j.apsoil.2014.10.015
    clips: [],
    homepage: null,
    plush: null,
  },
  tortellini: {
    name: "Tortellini",
    alternate: [],
    commands: ["tortellini"],
    species: "scorpionEmperor",
    sex: "Male",
    birth: "2022-10-01",
    arrival: "2022-11",
    retired: null,
    enclosure: "critters",
    story:
      "Our emperor scorpions were born in captivity and ethically sourced.",
    mission:
      "He is an ambassador for the importance of invertebrates and the misconceptions they face.",
    fact: "Scorpions, like Tortellini, glow brightly under UV light due to a UV-reactive layer in their exoskeletons. Why they glow continues to remain a mystery to science, and there are multiple potential theories. Some recent studies suggest it plays a role in a scorpion's light detection to allow them to detect when they are under shelter, for example.",
    // Fact source: https://www.sciencedirect.com/science/article/abs/pii/S0003347211005069?via%3Dihub
    clips: [],
    homepage: null,
    plush: null,
  },
  puppy: {
    name: "Puppy",
    alternate: [],
    commands: ["puppy"],
    species: "scorpionEmperor",
    sex: "Male",
    birth: "2022-10-01",
    arrival: "2022-11",
    retired: null,
    enclosure: "critters",
    story:
      "Our emperor scorpions were born in captivity and ethically sourced.",
    mission:
      "He is an ambassador for the importance of invertebrates and the misconceptions they face.",
    fact: "While scorpions are often perceived as scary or dangerous, only about 1% of species (25 of roughly 2500 known species) are dangerous to humans. Most scorpions' stings (including the emperor scorpion like Puppy) are no worse than a bee sting.",
    // Fact source: https://www.ncbi.nlm.nih.gov/books/NBK430928
    clips: [],
    homepage: null,
    plush: null,
  },
  eva: {
    name: "Eva",
    alternate: [],
    commands: ["eva"],
    species: "tarantulaMexicanRedRump",
    sex: "Female",
    birth: "2022",
    arrival: "2025-06-16",
    retired: null,
    enclosure: "critters",
    story:
      "Our tarantulas were captive bred by an entomologist before being donated to Alveus.",
    mission:
      "She is here to help people overcome their misconceptions towards spiders and to teach people about how important spiders are in our ecosystems.",
    clips: [],
    homepage: null,
    plush: null,
  },
  kiwi: {
    name: "Kiwi",
    alternate: [],
    commands: ["kiwi"],
    species: "tarantulaHonduranCurlyHair",
    sex: "Female",
    birth: "2022",
    arrival: "2025-06-16",
    retired: null,
    enclosure: "critters",
    story:
      "Our tarantulas were captive bred by an entomologist before being donated to Alveus.",
    mission:
      "She is here to help people overcome their misconceptions towards spiders and to teach people about how important spiders are in our ecosystems.",
    clips: [],
    homepage: null,
    plush: null,
  },
  pitchjars: {
    name: "PitchJars",
    alternate: ["Pitchy"],
    commands: ["pitchjars", "pitchy"],
    species: "plantVeitchPitcher",
    sex: null,
    birth: null,
    arrival: "2025-03-04",
    retired: null,
    enclosure: "greenhouse",
    story:
      "Our plants were acquired from Carnivero, a carnivorous and rare plant nursery in Austin, Texas.",
    mission:
      "They are ambassadors for the conservation of plants and reducing the poaching of wild plants.",
    fact: "The Veitch's Pitcher-Plant, like PitchJars, belongs to a genus of carnivorous plants called Nepenthes. Because of their variability in pitcher color, pattern, and structure, pitcher plants are often poached out of the wild from their very small and unique natural habitats to become part of the carnivorous plant trade. Currently, 25 species of Nepenthes are considered endangered.",
    // Fact source: https://doi.org/10.1016/j.gecco.2020.e01272
    clips: [],
    homepage: null,
    plush: null,
  },
  dewey: {
    name: "Dewey",
    alternate: [],
    commands: ["dewey"],
    species: "plantForkLeavedSundew",
    sex: null,
    birth: null,
    arrival: "2025-03-04",
    retired: null,
    enclosure: "greenhouse",
    story:
      "Our plants were acquired from Carnivero, a carnivorous and rare plant nursery in Austin, Texas.",
    mission:
      "They are ambassadors for the conservation of plants and reducing the poaching of wild plants.",
    clips: [],
    homepage: null,
    plush: null,
  },
  butt: {
    name: "Butt",
    alternate: ["Mrs. Butt"],
    commands: ["butt"],
    species: "plantMexicanButterwort",
    sex: null,
    birth: null,
    arrival: "2025-03-04",
    retired: null,
    enclosure: "greenhouse",
    story:
      "Our plants were acquired from Carnivero, a carnivorous and rare plant nursery in Austin, Texas.",
    mission:
      "They are ambassadors for the conservation of plants and reducing the poaching of wild plants.",
    fact: "Butt, and all Mexican Butterworts, passively trap and digest insects on their leaves. They produce a sticky substance called mucilage that coats the leaves to initially trap the insect. Enzymes are then released to begin the digestion process, and nutrient-rich fluids are absorbed through small holes in the leaf's surface.",
    // Fact source: https://www.britannica.com/plant/butterwort
    clips: [],
    homepage: null,
    plush: null,
  },
  stinky: {
    name: "Stinky",
    alternate: [],
    commands: ["stinky"],
    species: "plantCorpseFlower",
    sex: null,
    birth: null,
    arrival: "2025-03-04",
    retired: null,
    enclosure: "greenhouse",
    story:
      "Our plants were acquired from Carnivero, a carnivorous and rare plant nursery in Austin, Texas.",
    mission:
      "They are ambassadors for the conservation of plants and reducing the poaching of wild plants.",
    fact: "Despite Amorphophallus titanum smelling like rotting corpses when in bloom (giving it the nickname corpse flower), which attracts many flies and other insects, the flower is not actually carnivorous. It collects nutrients through photosynthesis, like most plants, and stores them in its tuber, while the smell produced is used to attract pollinators to the plant while it is blooming.",
    // Fact source: https://www.kew.org/plants/titan-arum
    clips: [],
    homepage: null,
    plush: null,
  },
  martyMcfly: {
    name: "Marty McFly",
    alternate: [],
    commands: ["mcfly", "martymcfly"],
    species: "plantVenusFlytrap",
    sex: null,
    birth: null,
    arrival: "2025-03-04",
    retired: null,
    enclosure: "greenhouse",
    story:
      "Our plants were acquired from Carnivero, a carnivorous and rare plant nursery in Austin, Texas.",
    mission:
      "They are ambassadors for the conservation of plants and reducing the poaching of wild plants.",
    clips: [],
    homepage: null,
    plush: null,
  },
  drew: {
    name: "Drew",
    alternate: [],
    commands: ["drew"],
    species: "plantFlaskPitcher",
    sex: null,
    birth: null,
    arrival: "2025-03-04",
    retired: null,
    enclosure: "greenhouse",
    story:
      "Our plants were acquired from Carnivero, a carnivorous and rare plant nursery in Austin, Texas.",
    mission:
      "They are ambassadors for the conservation of plants and reducing the poaching of wild plants.",
    fact: "While Drew may appear to look like other carnivorous pitcher plants, the flask-shaped pitcher plant is predominantly a detritivore, especially of leaf litter. It spends less effort on attracting prey and instead carpets the area on the ground to catch as much decaying material, such as falling leaves, as possible.",
    // Fact source: PAVLOVIČ, A., SLOVÁKOVÁ, Ľ. and ŠANTRŮČEK, J. (2011), Nutritional benefit from leaf litter utilization in the pitcher plant Nepenthes ampullaria. Plant, Cell & Environment, 34: 1865-1873. https://doi.org/10.1111/j.1365-3040.2011.02382.x
    clips: [],
    homepage: null,
    plush: null,
  },

  // Retired ambassadors
  orion: {
    name: "Orion",
    alternate: [],
    commands: ["orion"],
    species: "falconPrairiePeregrine",
    sex: "Male",
    birth: "2021-05-13",
    arrival: "2021-12",
    retired: "2022-06-14",
    enclosure: "falcon",
    story:
      "Orion was originally owned by Maya before becoming an ambassador at Alveus.\n\nOrion sadly passed away in June 2022 after an unfortunate accident in his enclosure.",
    mission:
      "He is an ambassador for showing how pest control affects wildlife globally and how to conserve major keystone species.",
    clips: [],
    homepage: null,
    plush: null,
  },
  pickles: {
    name: "Pickles",
    alternate: [],
    commands: ["pickles"],
    species: "vinegaroon",
    sex: "Female",
    birth: "2022",
    arrival: "2022-01",
    retired: "2023-02-09",
    enclosure: "critters",
    story:
      "Our vinegaroon was born in captivity and ethically sourced.\n\nSadly, Pickles passed away in February 2023 because she was unable to make it through her first molt.",
    mission:
      "She is an ambassador for the importance of invertebrates and the misconceptions they face.",
    clips: [],
    homepage: null,
    plush: null,
  },
  henrietta: {
    name: "Henrietta",
    alternate: [],
    commands: ["henrietta"],
    species: "chickenJerseyGiant",
    sex: "Female",
    birth: "2019",
    arrival: "2022-08",
    retired: "2023-03",
    enclosure: "chickens",
    story:
      "Henrietta was rehomed from a local farm.\n\nHenrietta was retired from being an ambassador in March 2023 and now lives in a chicken coop at Maya's Tiny House with her rabbit and other chicken.",
    mission:
      "She is an ambassador for the agricultural industry and how people can use consumer choice to impact the environment in a positive way.",
    clips: [],
    homepage: null,
    plush: null,
  },
  ducky: {
    name: "Ducky",
    alternate: [],
    commands: ["ducky"],
    species: "isopodRubberDucky",
    sex: null,
    birth: "2022",
    arrival: "2022-01",
    retired: "2023-06",
    enclosure: "critters",
    story:
      "Our rubber ducky isopods were born in captivity and ethically sourced.\n\nUnfortunately, our colony of isopods didn't breed enough to sustain themselves, with the final few passing away in June 2023.",
    mission:
      "They are ambassadors for the importance of invertebrates and the misconceptions they face.",
    clips: [],
    homepage: null,
    plush: null,
  },
  nillaWafer: {
    name: "Nilla Wafer",
    alternate: [],
    commands: ["nilla", "nillawafer"],
    species: "ratDomestic",
    sex: "Female",
    birth: null,
    arrival: "2022-12",
    retired: "2024-12-05",
    enclosure: "nutrition",
    story:
      "Nilla Wafer was bred as a feeder rat for snakes, but she will now live out her full life at Alveus.",
    mission:
      "She is an ambassador for how rodenticide use and outdoor cats affect all levels of wildlife.",
    clips: [{ id: "C2Ob-gQ_9os", caption: "Target Training With The Rats" }],
    homepage: null,
    plush: null,
  },
  chipsAhoy: {
    name: "Chips Ahoy",
    alternate: [],
    commands: ["chips", "chipsahoy"],
    species: "ratDomestic",
    sex: "Female",
    birth: null,
    arrival: "2022-12",
    retired: "2024-12-13",
    enclosure: "nutrition",
    story:
      "Chips Ahoy was bred as a feeder rat for snakes, but she will now live out her full life at Alveus.",
    mission:
      "She is an ambassador for how rodenticide use and outdoor cats affect all levels of wildlife.",
    clips: [{ id: "C2Ob-gQ_9os", caption: "Target Training With The Rats" }],
    homepage: null,
    plush: null,
  },
  timber: {
    name: "Timber",
    alternate: [],
    commands: ["timber"],
    species: "wolfHybrid",
    sex: "Male",
    birth: "2014",
    arrival: "2024-05-04",
    retired: "2024-12-08",
    enclosure: "wolves",
    story:
      "Timber was rescued from a facility that has received numerous USDA citations based on violations of the Animal Welfare Act.",
    mission:
      "He is an ambassador for educating people about responsible pet ownership, the historic persecution of wolves by humans, and the importance of wolves as keystone species in their ecosystems.",
    clips: [],
    homepage: null,
    plush: null,
  },
} as const satisfies Record<string, Ambassador>;

export type Ambassadors = typeof ambassadors;

export type AmbassadorKey = keyof Ambassadors;

const ambassadorKeys = Object.keys(ambassadors) as AmbassadorKey[];

export const isAmbassadorKey = (str: string): str is AmbassadorKey =>
  ambassadorKeys.includes(str as AmbassadorKey);

export default ambassadors;
