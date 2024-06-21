import type { IUCNStatus } from "../iucn";
import type { EnclosureKey } from "../enclosures";
import type { PartialDateString, Nullable } from "../types";
import { Class } from "./classification";

export type Ambassadors = typeof ambassadors;

export type AmbassadorKey = keyof Ambassadors;

export type Ambassador = {
  name: string;
  alternate: Readonly<string[]>;
  commands: Readonly<string[]>;
  class: Class;
  species: string;
  scientific: string;
  sex: Nullable<"Male" | "Female">;
  birth: Nullable<PartialDateString>;
  arrival: Nullable<PartialDateString>;
  retired: Nullable<PartialDateString>;
  iucn: {
    id: Nullable<number>;
    status: IUCNStatus;
  };
  enclosure: EnclosureKey;
  story: string;
  mission: string;
  native: {
    text: string;
    source: string;
  };
  clips: Readonly<{ id: string; caption: string }[]>;
  homepage: Nullable<{ title: string; description: string }>;
  plush: Nullable<{ link: string } | { soon: string }>;
};

const ambassadors = {
  // Active ambassadors
  stompy: {
    name: "Stompy",
    alternate: [],
    commands: ["stompy"],
    class: Class.Aves,
    species: "Emu",
    scientific: "Dromaius novaehollandiae",
    sex: "Male",
    birth: "2021-02-14",
    arrival: "2021-06-01",
    retired: null,
    iucn: {
      id: 22678117,
      status: "LC",
    },
    enclosure: "pasture",
    story:
      "Stompy was hatched in captivity and was hand raised by Maya to be the first Alveus ambassador.",
    mission:
      "He is an ambassador for stopping the exotic meat trade, traditional medicine, and over exploitation of animal products in cosmetics.",
    native: {
      text: "Australia (savannah woodlands and sclerophyll forests)",
      source: "https://en.wikipedia.org/wiki/Emu",
    },
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
    class: Class.Amphibia,
    species: "African Bullfrog",
    scientific: "Pyxicephalus adspersus",
    sex: "Male",
    birth: "2021",
    arrival: "2021-04",
    retired: null,
    iucn: {
      id: 58535,
      status: "LC/decreasing",
    },
    enclosure: "reptiles",
    story:
      "Georgie was part of an educational program at a zoo and was rehomed to Alveus.",
    mission:
      "He is an ambassador for the wildlife trade and how chytrid fungus is affecting amphibian species worldwide.",
    native: {
      text: "Sub-Saharan Africa (dry savanna, freshwater lakes, marshes, etc.)",
      source: "https://en.wikipedia.org/wiki/African_bullfrog",
    },
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
    class: Class.Aves,
    species: "Blue and Gold Macaw",
    scientific: "Ara ararauna",
    sex: "Female",
    birth: null,
    arrival: "2021-04",
    retired: null,
    iucn: {
      id: 22685539,
      status: "LC/decreasing",
    },
    enclosure: "parrots",
    story:
      "Tico was rehomed to Alveus as the previous sanctuary’s owner was retiring,",
    mission:
      "She is an ambassador for how the pet trade has affected her parrot species and many others around the world.",
    native: {
      text: "South America (tropical rainforests)",
      source: "https://en.wikipedia.org/wiki/Blue-and-yellow_macaw",
    },
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
    class: Class.Aves,
    species: "Catalina Macaw",
    scientific: "Ara ararauna x Ara macao",
    sex: "Female",
    birth: null,
    arrival: "2021-04",
    retired: null,
    iucn: {
      id: null,
      status: "NE",
    },
    enclosure: "parrots",
    story:
      "Miley was rehomed to Alveus as the previous sanctuary’s owner was retiring.",
    mission:
      "She is an ambassador for how the pet trade has affected her parrot species and many others around the world.",
    native: {
      text: "Usually bred in captivity",
      source: "https://en.wikipedia.org/wiki/Catalina_macaw",
    },
    clips: [{ id: "HEcrzoXofB8", caption: "Maya Gives Miley A Bath" }],
    homepage: null,
    plush: null,
  },
  mia: {
    name: "Mia",
    alternate: [],
    commands: ["mia"],
    class: Class.Aves,
    species: "African Grey",
    scientific: "Psittacus erithacus",
    sex: "Female",
    birth: null,
    arrival: "2021-04",
    retired: null,
    iucn: {
      id: 22724813,
      status: "EN/decreasing",
    },
    enclosure: "parrots",
    story:
      "Mia was rehomed to Alveus as the previous sanctuary’s owner was retiring.",
    mission:
      "She is an ambassador for how the pet trade has affected her parrot species and many others around the world.",
    native: {
      text: "Equatorial Africa (dense forests)",
      source: "https://en.wikipedia.org/wiki/African_grey_parrot",
    },
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
    class: Class.Aves,
    species: "Blue-fronted Amazon",
    scientific: "Amazona aestiva",
    sex: "Female",
    birth: null,
    arrival: "2021-04",
    retired: null,
    iucn: {
      id: 22686332,
      status: "NT/decreasing",
    },
    enclosure: "parrots",
    story:
      "Siren was rehomed to Alveus as the previous sanctuary’s owner was retiring.",
    mission:
      "She is an ambassador for how the pet trade has affected her parrot species and many others around the world.",
    native: {
      text: "South America (tropical rainforests)",
      source: "https://en.wikipedia.org/wiki/Blue-fronted_amazon",
    },
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
    class: Class.Aves,
    species: "American Crow",
    scientific: "Corvus brachyrhynchos",
    sex: "Male",
    birth: "2020-05",
    arrival: "2021-08",
    retired: null,
    iucn: {
      id: 22705990,
      status: "LC/increasing",
    },
    enclosure: "crows",
    story:
      "Abbott was brought into a wildlife rehab center as a baby. He imprinted during the rehab process and then was deemed non-releasable.",
    mission:
      "He is an ambassador for educating people on the misconceptions that wildlife face as well as human-wildlife conflict.",
    native: {
      text: "North America (forests)",
      source: "https://en.wikipedia.org/wiki/American_crow",
    },
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
    class: Class.Aves,
    species: "American Crow",
    scientific: "Corvus brachyrhynchos",
    sex: "Male",
    birth: "2021",
    arrival: "2021-08",
    retired: null,
    iucn: {
      id: 22705990,
      status: "LC/increasing",
    },
    enclosure: "crows",
    story:
      "Coconut was brought into a wildlife rehab center as a baby. He imprinted during the rehab process and then was deemed non-releasable.",
    mission:
      "He is an ambassador for educating people on the misconceptions that wildlife face as well as human-wildlife conflict.",
    native: {
      text: "North America (forests)",
      source: "https://en.wikipedia.org/wiki/American_crow",
    },
    clips: [],
    homepage: null,
    plush: null,
  },
  oliver: {
    name: "Oliver",
    alternate: [],
    commands: ["oliver"],
    class: Class.Aves,
    species: "Olive Egger Chicken",
    scientific: "Gallus gallus domesticus",
    sex: "Male",
    birth: "2021",
    arrival: "2021-06",
    retired: null,
    iucn: {
      id: null,
      status: "NE",
    },
    enclosure: "chickens",
    story: "Oliver was put in the reject/return cage at a local feed store.",
    mission:
      "He is an ambassador for the agricultural industry and how people can use consumer choice to impact the environment in a positive way.",
    native: {
      text: "North America (domesticated)",
      source: "https://en.wikipedia.org/wiki/Chicken",
    },
    clips: [],
    homepage: null,
    plush: null,
  },
  nugget: {
    name: "Nugget",
    alternate: [],
    commands: ["nugget"],
    class: Class.Aves,
    species: "Ameraucana Chicken",
    scientific: "Gallus gallus domesticus",
    sex: "Female",
    birth: "2019",
    arrival: "2021-04",
    retired: null,
    iucn: {
      id: null,
      status: "NE",
    },
    enclosure: "chickens",
    story:
      "Nugget was rehomed to Alveus because she was bullied by hens in her previous flock.",
    mission:
      "She is an ambassador for the agricultural industry and how people can use consumer choice to impact the environment in a positive way.",
    native: {
      text: "North America (domesticated)",
      source: "https://en.wikipedia.org/wiki/Chicken",
    },
    clips: [{ id: "GcPu01J0G-Q", caption: "Nugget Belongs In A Circus" }],
    homepage: null,
    plush: null,
  },
  henrique: {
    name: "Henrique",
    alternate: [],
    commands: ["henrique"],
    class: Class.Aves,
    species: "Half Dark Brahma, Half Saipan Chicken",
    scientific: "Gallus gallus domesticus",
    sex: "Female",
    birth: "2020",
    arrival: "2022-08",
    retired: null,
    iucn: {
      id: null,
      status: "NE",
    },
    enclosure: "chickens",
    story: "Henrique was rehomed from a local farm.",
    mission:
      "She is an ambassador for the agricultural industry and how people can use consumer choice to impact the environment in a positive way.",
    native: {
      text: "North America (domesticated)",
      source: "https://en.wikipedia.org/wiki/Chicken",
    },
    clips: [],
    homepage: null,
    plush: null,
  },
  winnieTheMoo: {
    name: "Winnie (The Moo)",
    alternate: [],
    commands: ["winnie"],
    class: Class.Mammalia,
    species: "Red Angus Beef Cow",
    scientific: "Bos (primigenius) taurus",
    sex: "Female",
    birth: "2022-03-22",
    arrival: "2022-04",
    retired: null,
    iucn: {
      id: null,
      status: "NE",
    },
    enclosure: "pasture",
    story: "Winnie came from a cattle operation in Oklahoma.",
    mission:
      "She is an ambassador for the beef industry and how people can use their consumer choice to impact the environment in a positive way.",
    native: {
      text: "Australia, United States (domesticated)",
      source: "https://en.wikipedia.org/wiki/Red_Angus",
    },
    clips: [
      { id: "FKU7-u5-L24", caption: "Winnie Causes Chaos In The Grain Stall" },
      { id: "qWDd5nnWSuI", caption: "Winnie's First Day On Stream" },
    ],
    homepage: null,
    plush: {
      link: "https://youtooz.com/products/winnie-plush-9-inch",
    },
  },
  noodle: {
    name: "Noodle",
    alternate: [],
    commands: ["noodle"],
    class: Class.Reptilia,
    species: "Coastal Carpet Python",
    scientific: "Morelia spilota mcdowelli",
    sex: "Female",
    birth: null,
    arrival: "2021-04",
    retired: null,
    iucn: {
      id: 62232,
      status: "LC/decreasing",
    },
    enclosure: "reptiles",
    story:
      "Noodle was part of an educational program at a zoo and was rehomed to Alveus.",
    mission:
      "She is an ambassador for how the pet trade and habitat loss has affected hers and many other reptile species worldwide.",
    native: {
      text: "Australia (suburban area, rainforests, forests, etc.)",
      source: "https://en.wikipedia.org/wiki/Carpet_python",
    },
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
    class: Class.Reptilia,
    species: "Ball Python",
    scientific: "Python regius",
    sex: "Female",
    birth: "2021-08-15",
    arrival: "2021-10",
    retired: null,
    iucn: {
      id: 177562,
      status: "NT/decreasing",
    },
    enclosure: "reptiles",
    story:
      "Patchy was rehomed to Alveus from a local breeder after it was discovered that she had a genetic defect and was missing an eye.",
    mission:
      "She is an ambassador for how the pet trade and habitat loss has affected hers and many other reptile species worldwide.",
    native: {
      text: "West Sub Saharan Africa (grasslands, savannas, sparsely wooded areas)",
      source: "https://en.wikipedia.org/wiki/Ball_python",
    },
    clips: [],
    homepage: null,
    plush: null,
  },
  fenn: {
    name: "Fenn",
    alternate: [],
    commands: ["fenn"],
    class: Class.Mammalia,
    species: "American Red Fox",
    scientific: "Vulpes vulpes fulva",
    sex: "Male",
    birth: "2020",
    arrival: "2022-11",
    retired: null,
    iucn: {
      id: 23062,
      status: "LC",
    },
    enclosure: "foxes",
    story:
      "Fenn was confiscated from the illegal pet trade by California Department of Fish and Wildlife. He was then rehomed to Alveus.",
    mission:
      "He is an ambassador for the exploitation of wildlife in the pet trade and the fur trade.",
    native: {
      text: "North America",
      source: "https://en.wikipedia.org/wiki/American_red_fox",
    },
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
    class: Class.Mammalia,
    species: "American Red Fox",
    scientific: "Vulpes vulpes fulva",
    sex: "Male",
    birth: "2019",
    arrival: "2022-11",
    retired: null,
    iucn: {
      id: 23062,
      status: "LC",
    },
    enclosure: "foxes",
    story:
      "Reed was orphaned as a wild kit and was rescued to be raised at a zoo to be an educational ambassador. He was then rehomed to Alveus.",
    mission:
      "He is an ambassador for the exploitation of wildlife in the pet trade and the fur trade.",
    native: {
      text: "North America",
      source: "https://en.wikipedia.org/wiki/American_red_fox",
    },
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
  serrano: {
    name: "Serrano",
    alternate: [],
    commands: ["serrano"],
    class: Class.Mammalia,
    species: "Domestic Donkey",
    scientific: "Equus africanus asinus",
    sex: "Male",
    birth: null,
    arrival: "2021-05",
    retired: null,
    iucn: {
      id: null,
      status: "NE",
    },
    enclosure: "pasture",
    story: "Rehomed to Alveus from a local equine rescue.",
    mission:
      "Serrano is an ambassador for the wildlife trade and use of wild animals in traditional medicine.",
    native: {
      text: "Worldwide (domesticated)",
      source: "https://en.wikipedia.org/wiki/Donkey",
    },
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
    class: Class.Mammalia,
    species: "Domestic Donkey",
    scientific: "Equus africanus asinus",
    sex: "Male",
    birth: null,
    arrival: "2021-05",
    retired: null,
    iucn: {
      id: null,
      status: "NE",
    },
    enclosure: "pasture",
    story: "Rehomed to Alveus from a local equine rescue.",
    mission:
      "Jalapeño is an ambassador for the wildlife trade and use of wild animals in traditional medicine.",
    native: {
      text: "Worldwide (domesticated)",
      source: "https://en.wikipedia.org/wiki/Donkey",
    },
    clips: [
      { id: "D0daZV1P3AM", caption: "Donkeys Fighting For The Ball" },
      { id: "81Zrv7veNMY", caption: "The Donkeys Play With A Ball At Night" },
    ],
    homepage: null,
    plush: null,
  },
  snork: {
    name: "Snork",
    alternate: [],
    commands: ["snork"],
    class: Class.Mammalia,
    species: "Chinchilla",
    scientific: "Chinchilla lanigera",
    sex: "Female",
    birth: "2021",
    arrival: "2021-04",
    retired: null,
    iucn: {
      id: 4652,
      status: "EN/decreasing",
    },
    enclosure: "nutrition",
    story:
      "Snork was part of an educational program at a zoo and was rehomed to Alveus.",
    mission:
      "She is an ambassador for the exploitation of wildlife in the fur trade.",
    native: {
      text: "Andes Mountains, South America (Domesticated)",
      source: "https://en.wikipedia.org/wiki/Chinchilla",
    },
    clips: [{ id: "djDIUl2c0v8", caption: "Moomin Steals A Stick From Snork" }],
    homepage: null,
    plush: null,
  },
  moomin: {
    name: "Moomin",
    alternate: [],
    commands: ["moomin"],
    class: Class.Mammalia,
    species: "Chinchilla",
    scientific: "Chinchilla lanigera",
    sex: "Male",
    birth: "2017",
    arrival: "2021-04",
    retired: null,
    iucn: {
      id: 4652,
      status: "EN/decreasing",
    },
    enclosure: "nutrition",
    story: "Rehomed from a local pet owner.",
    mission:
      "He is an ambassador for the exploitation of wildlife in the fur trade.",
    native: {
      text: "Andes Mountains, South America (Domesticated)",
      source: "https://en.wikipedia.org/wiki/Chinchilla",
    },
    clips: [{ id: "djDIUl2c0v8", caption: "Moomin Steals A Stick From Snork" }],
    homepage: {
      title: "Moomin is Movin' In!",
      description:
        "He is an ambassador for how the fur trade has affected his species and many others.",
    },
    plush: null,
  },
  hankMrMctrain: {
    name: "Hank Mr. McTrain",
    alternate: ["Hank The Tank Choo Choo Mr. McTrain", "Mr. Conductor Man"],
    commands: ["hank"],
    class: Class.Diplopoda,
    species: "Smokey Ghost Millipede",
    scientific: "Narceus gordanus",
    sex: "Male",
    birth: "2022",
    arrival: "2022-01",
    retired: null,
    iucn: {
      id: null,
      status: "NE",
    },
    enclosure: "critters",
    story:
      "Our smokey ghost millipede was born in captivity and ethically sourced.",
    mission:
      "He is an ambassador for the importance of invertebrates and the misconceptions they face.",
    native: {
      text: "Eastern United States",
      source: "https://en.wikipedia.org/wiki/Narceus_gordanus",
    },
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
    class: Class.Insecta,
    species: "Madagascar Hissing Cockroaches",
    scientific: "Gromphadorhina portentosa",
    sex: null,
    birth: "2022",
    arrival: "2022-01",
    retired: null,
    iucn: {
      id: null,
      status: "NE",
    },
    enclosure: "critters",
    story:
      "Our cockroach colony was started with 7 roaches that were part of an educational colony at a school in Pennsylvania.",
    mission:
      "They are ambassadors for the importance of invertebrates and the misconceptions they face.",
    native: {
      text: "Madagascar",
      source: "https://en.wikipedia.org/wiki/Gromphadorhina_portentosa",
    },
    clips: [],
    homepage: null,
    plush: null,
  },
  marty: {
    name: "Marty",
    alternate: [],
    commands: ["marty"],
    class: Class.Malacostraca,
    species: "Zebra Isopods",
    scientific: "Armadillidium maculatum",
    sex: null,
    birth: "2022",
    arrival: "2022-01",
    retired: null,
    iucn: {
      id: null,
      status: "NE",
    },
    enclosure: "critters",
    story: "Our zebra isopods were born in captivity and ethically sourced.",
    mission:
      "They are ambassadors for the importance of invertebrates and the misconceptions they face.",
    native: {
      text: "Southern France",
      source: "https://en.wikipedia.org/wiki/Armadillidium_maculatum",
    },
    clips: [],
    homepage: null,
    plush: null,
  },
  bb: {
    name: "BB",
    alternate: ["Bonus Bug"],
    commands: ["bb", "bonusbug"],
    class: Class.Malacostraca,
    species: "Spanish Orange Isopods",
    scientific: "Porcellio scaber",
    sex: null,
    birth: "2022",
    arrival: "2022-01",
    retired: null,
    iucn: {
      id: null,
      status: "NE",
    },
    enclosure: "critters",
    story:
      "Our spanish orange isopods were born in captivity and ethically sourced.",
    mission:
      "They are ambassadors for the importance of invertebrates and the misconceptions they face.",
    native: {
      text: "Europe",
      source: "https://en.wikipedia.org/wiki/Porcellio_scaber",
    },
    clips: [],
    homepage: null,
    plush: null,
  },
  awa: {
    name: "Awa",
    alternate: [],
    commands: ["awa"],
    class: Class.Mammalia,
    species: "Wolfdog",
    scientific: "Canis lupus x Canis familiaris",
    sex: "Female",
    birth: "2014",
    arrival: "2024-05-04",
    retired: null,
    iucn: {
      id: 3746,
      status: "LC",
    },
    enclosure: "wolves",
    story:
      "Awa was rescued from a facility that has received numerous USDA citations based on violations of the Animal Welfare Act.",
    mission:
      "She is an ambassador for educating people about responsible pet ownership, the historic persecution of wolves by humans, and the importance of wolves as keystone species in their ecosystems.",
    native: {
      text: "Eurasia and North America (forests, inland wetlands, shrublands, grasslands (including Arctic tundra), pastures, deserts, and rocky peaks on mountains)",
      source: "https://en.wikipedia.org/wiki/Wolf",
    },
    clips: [],
    homepage: null,
    plush: null,
  },
  timber: {
    name: "Timber",
    alternate: [],
    commands: ["timber"],
    class: Class.Mammalia,
    species: "Wolfdog",
    scientific: "Canis lupus x Canis familiaris",
    sex: "Male",
    birth: "2014",
    arrival: "2024-05-04",
    retired: null,
    iucn: {
      id: 3746,
      status: "LC",
    },
    enclosure: "wolves",
    story:
      "Timber was rescued from a facility that has received numerous USDA citations based on violations of the Animal Welfare Act.",
    mission:
      "He is an ambassador for educating people about responsible pet ownership, the historic persecution of wolves by humans, and the importance of wolves as keystone species in their ecosystems.",
    native: {
      text: "Eurasia and North America (forests, inland wetlands, shrublands, grasslands (including Arctic tundra), pastures, deserts, and rocky peaks on mountains)",
      source: "https://en.wikipedia.org/wiki/Wolf",
    },
    clips: [],
    homepage: null,
    plush: null,
  },
  momo: {
    name: "Momo",
    alternate: [],
    commands: ["momo"],
    class: Class.Mammalia,
    species: "Black Tufted Marmoset",
    scientific: "Callithrix penicillata",
    sex: "Male",
    birth: null,
    arrival: "2022-12",
    retired: null,
    iucn: {
      id: 41519,
      status: "LC/decreasing",
    },
    enclosure: "marmosets",
    story:
      "Momo was rescued by Alveus after being surrendered to a veterinarian due to neglect.",
    mission:
      "He is an ambassador for the exotic pet trade and how it affects primate species worldwide.",
    native: {
      text: "Brazil (Neo-tropical gallery forests)",
      source: "https://en.wikipedia.org/wiki/Black-tufted_marmoset",
    },
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
    class: Class.Mammalia,
    species: "Common Marmoset",
    scientific: "Callithrix jacchus",
    sex: "Male",
    birth: null,
    arrival: "2022-12",
    retired: null,
    iucn: {
      id: 41518,
      status: "LC/decreasing",
    },
    enclosure: "marmosets",
    story:
      "Appa was rescued by Alveus after being surrendered to a veterinarian due to neglect.",
    mission:
      "He is an ambassador for the exotic pet trade and how it affects primate species worldwide.",
    native: {
      text: "Brazil",
      source: "https://en.wikipedia.org/wiki/Common_marmoset",
    },
    clips: [
      { id: "kSC1O1Tqgz8", caption: "The Monkeys Make Their Debut On Stream" },
    ],
    homepage: null,
    plush: null,
  },
  tortellini: {
    name: "Tortellini",
    alternate: [],
    commands: ["tortellini"],
    class: Class.Arachnida,
    species: "Emperor Scorpion",
    scientific: "Pandinus imperator",
    sex: "Male",
    birth: "2022-10-01",
    arrival: "2022-11",
    retired: null,
    iucn: {
      id: null,
      status: "NE",
    },
    enclosure: "critters",
    story:
      "Our emperor scorpions were born in captivity and ethically sourced.",
    mission:
      "He is an ambassador for the importance of invertebrates and the misconceptions they face.",
    native: {
      text: "Africa (rainforests, savannas)",
      source: "https://en.wikipedia.org/wiki/Pandinus_imperator",
    },
    clips: [],
    homepage: null,
    plush: null,
  },
  puppy: {
    name: "Puppy",
    alternate: [],
    commands: ["puppy"],
    class: Class.Arachnida,
    species: "Emperor Scorpion",
    scientific: "Pandinus imperator",
    sex: "Male",
    birth: "2022-10-01",
    arrival: "2022-11",
    retired: null,
    iucn: {
      id: null,
      status: "NE",
    },
    enclosure: "critters",
    story:
      "Our emperor scorpions were born in captivity and ethically sourced.",
    mission:
      "He is an ambassador for the importance of invertebrates and the misconceptions they face.",
    native: {
      text: "Africa (rainforests, savannas)",
      source: "https://en.wikipedia.org/wiki/Pandinus_imperator",
    },
    clips: [],
    homepage: null,
    plush: null,
  },
  chipsAhoy: {
    name: "Chips Ahoy",
    alternate: [],
    commands: ["chips", "chipsahoy"],
    class: Class.Mammalia,
    species: "Domestic Rat",
    scientific: "Rattus norvegicus f. domestica",
    sex: "Female",
    birth: null,
    arrival: "2022-12",
    retired: null,
    iucn: {
      id: 19353,
      status: "LC",
    },
    enclosure: "nutrition",
    story:
      "Chips Ahoy was bred as a feeder rat for snakes, but she will now live out her full life at Alveus.",
    mission:
      "She is an ambassador for how rodenticide use and outdoor cats affect all levels of wildlife.",
    native: {
      text: "Worldwide (Domesticated)",
      source: "https://en.wikipedia.org/wiki/Fancy_rat",
    },
    clips: [{ id: "C2Ob-gQ_9os", caption: "Target Training With The Rats" }],
    homepage: null,
    plush: null,
  },
  nillaWafer: {
    name: "Nilla Wafer",
    alternate: [],
    commands: ["nilla", "nillawafer"],
    class: Class.Mammalia,
    species: "Domestic Rat",
    scientific: "Rattus norvegicus f. domestica",
    sex: "Female",
    birth: null,
    arrival: "2022-12",
    retired: null,
    iucn: {
      id: 19353,
      status: "LC",
    },
    enclosure: "nutrition",
    story:
      "Nilla Wafer was bred as a feeder rat for snakes, but she will now live out her full life at Alveus.",
    mission:
      "She is an ambassador for how rodenticide use and outdoor cats affect all levels of wildlife.",
    native: {
      text: "Worldwide (Domesticated)",
      source: "https://en.wikipedia.org/wiki/Fancy_rat",
    },
    clips: [{ id: "C2Ob-gQ_9os", caption: "Target Training With The Rats" }],
    homepage: null,
    plush: null,
  },
  pushPop: {
    name: "Push Pop",
    alternate: ["Poppy"],
    commands: ["pushpop", "poppy"],
    class: Class.Reptilia,
    species: "Sulcata Tortoise",
    scientific: "Centrochelys sulcata",
    sex: null, // Unknown, assumed female
    birth: "2019",
    arrival: "2024-02",
    retired: null,
    iucn: {
      id: 163423,
      status: "EN/decreasing",
    },
    enclosure: "tortoise",
    story:
      "Push Pop was bought as a pet and was rehomed when the family moved states. She was then transferred to Alveus.",
    mission:
      "She is an ambassador for teaching the world about the exotic pet trade, habitat loss due to agricultural expansion for cattle, and the gradual effects of climate change on our natural world.",
    native: {
      text: "Sahara Desert and the Sahel (shrubland, grassland)",
      source: "https://en.wikipedia.org/wiki/African_spurred_tortoise",
    },
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
    class: Class.Reptilia,
    species: "Blue-tongued Skink",
    scientific: "Tiliqua scincoides intermedia",
    sex: "Male",
    birth: "2022-07-04",
    arrival: "2022-11",
    retired: null,
    iucn: {
      id: 109481538,
      status: "LC",
    },
    enclosure: "reptiles",
    story:
      "Toaster Strudel was part of an educational program at a zoo and was rehomed to Alveus.",
    mission:
      "He is an ambassador for how human development and invasive species can affect natural habitats and native species.",
    native: {
      text: "Australia",
      source: "https://en.wikipedia.org/wiki/Blue-tongued_skink",
    },
    clips: [],
    homepage: null,
    plush: null,
  },
  polly: {
    name: "Polly",
    alternate: [],
    commands: ["polly"],
    class: Class.Aves,
    species: "Bantam Silkie Chicken",
    scientific: "Gallus gallus domesticus",
    sex: "Female",
    birth: null,
    arrival: "2023-11", // Previously 2022-08 to 2022-11
    retired: null,
    iucn: {
      id: null,
      status: "NE",
    },
    enclosure: "nutrition",
    story: "Polly was rehomed from another owner.",
    mission:
      "She is an ambassador for the agricultural industry and how people can use consumer choice to impact the environment in a positive way.",
    native: {
      text: "China (Domesticated)",
      source: "https://en.wikipedia.org/wiki/Silkie",
    },
    clips: [],
    homepage: null,
    plush: null,
  },

  // Retired ambassadors
  orion: {
    name: "Orion",
    alternate: [],
    commands: ["orion"],
    class: Class.Aves,
    species: "Prairie/Peregrine Falcon",
    scientific: "Falco mexicanus x Falco peregrinus",
    sex: "Male",
    birth: "2021-05-13",
    arrival: "2021-12",
    retired: "2022-06-14",
    iucn: {
      id: null,
      status: "NE",
    },
    enclosure: "falcon",
    story:
      "Orion was originally owned by Maya before becoming an ambassador at Alveus.\n\nOrion sadly passed away in June 2022 after an unfortunate accident in his enclosure.",
    mission:
      "He is an ambassador for showing how pest control affects wildlife globally and how to conserve major keystone species.",
    native: {
      text: "Western North America",
      source: "https://en.wikipedia.org/wiki/Prairie_falcon",
    },
    clips: [],
    homepage: null,
    plush: null,
  },
  pickles: {
    name: "Pickles",
    alternate: [],
    commands: ["pickles"],
    class: Class.Arachnida,
    species: "Vinegaroon",
    scientific: "Mastigoproctus tohono",
    sex: "Female",
    birth: "2022",
    arrival: "2022-01",
    retired: "2023-02-09",
    iucn: {
      id: null,
      status: "NE",
    },
    enclosure: "critters",
    story:
      "Our vinegaroon was born in captivity and ethically sourced.\n\nSadly, Pickles passed away in February 2023 because she was unable to make it through her first molt.",
    mission:
      "She is an ambassador for the importance of invertebrates and the misconceptions they face.",
    native: {
      text: "Tropical and subtropical areas, excluding Europe and Australia",
      source: "https://en.wikipedia.org/wiki/Vinegaroon",
    },
    clips: [],
    homepage: null,
    plush: null,
  },
  henrietta: {
    name: "Henrietta",
    alternate: [],
    commands: ["henrietta"],
    class: Class.Aves,
    species: "Jersey Giant Chicken",
    scientific: "Gallus gallus domesticus",
    sex: "Female",
    birth: "2019",
    arrival: "2022-08",
    retired: "2023-03",
    iucn: {
      id: null,
      status: "NE",
    },
    enclosure: "chickens",
    story:
      "Henrietta was rehomed from a local farm.\n\nHenrietta was retired from being an ambassador in March 2023 and now lives in a chicken coop at Maya's Tiny House with her rabbit and other chicken.",
    mission:
      "She is an ambassador for the agricultural industry and how people can use consumer choice to impact the environment in a positive way.",
    native: {
      text: "United States (Domesticated)",
      source: "https://en.wikipedia.org/wiki/Jersey_Giant",
    },
    clips: [],
    homepage: null,
    plush: null,
  },
  ducky: {
    name: "Ducky",
    alternate: [],
    commands: ["ducky"],
    class: Class.Malacostraca,
    species: "Rubber Ducky Isopods",
    scientific: "Cubaris sp.",
    sex: null,
    birth: "2022",
    arrival: "2022-01",
    retired: "2023-06",
    iucn: {
      id: null,
      status: "NE",
    },
    enclosure: "critters",
    story:
      "Our rubber ducky isopods were born in captivity and ethically sourced.\n\nUnfortunately, our colony of isopods didn't breed enough to sustain themselves, with the final few passing away in June 2023.",
    mission:
      "They are ambassadors for the importance of invertebrates and the misconceptions they face.",
    native: {
      text: "Asia",
      source: "https://en.wikipedia.org/wiki/Cubaris",
    },
    clips: [],
    homepage: null,
    plush: null,
  },
} as const satisfies Record<string, Ambassador>;

const ambassadorKeys = Object.keys(ambassadors) as AmbassadorKey[];

export const isAmbassadorKey = (str: string): str is AmbassadorKey =>
  ambassadorKeys.includes(str as AmbassadorKey);

export default ambassadors;
