import { isAmbassadorKey, type AmbassadorKey } from "./ambassadors/core";

type Host = { name: string; link?: string };
type HostKey = keyof typeof hosts;

export const hosts = {
  maya: {
    name: "Maya Higa",
    link: "https://www.alveussanctuary.org/about/staff#maya",
  },
} as const satisfies Record<string, Host>;

const length = (h: number, m: number, s: number) => h * 60 * 60 + m * 60 + s;

export type AnimalQuest = {
  video: {
    cu: string;
    id: string;
  };
  edition: string;
  description: string;
  broadcast: Date;
  host: HostKey;
  length: number;
  prezi: string;
  ambassadors: {
    featured: Readonly<[AmbassadorKey, ...AmbassadorKey[]]>;
    related: Readonly<AmbassadorKey[]>;
  };
};

const animalQuest: Readonly<AnimalQuest[]> = [
  {
    video: {
      id: "613bb9dabd2a94c7e649343c9aab23e3", // Original: b2bd5142dce29c42135cf6a1cea7c5b3
      cu: "agf91muwks8sd9ee",
    },
    edition: "Chicken Edition",
    description:
      "Get to know Polly and Alveus' other chickens. We'll learn about egg laying, what food labels mean and which ones to look for, the impact the agriculture industry has on the environment, and what you can do to help.",
    broadcast: new Date("2023-12-21"),
    host: "maya",
    length: length(1, 8, 55),
    prezi: "YRnYHgjrgcC4EmnnTq8w",
    ambassadors: {
      featured: ["polly"],
      related: ["oliver", "nugget", "henrique", "henrietta", "betty"],
    },
  },
  {
    video: {
      id: "4f9f116510998f6e74540ac0ffe3f8e4", // Original: c7b30c59a90eeec6d074d28c85011186
      cu: "agf91muwks8sd9ee",
    },
    edition: "Emu Edition",
    description:
      "Meet Stompy, Alveus' Emu, and learn about the threats that his species faces in the wild including the exotic meat trade and production of emu products such as emu oil. We'll also discuss the great emu war of 1932 and the natural history of emus.",
    broadcast: new Date("2024-01-23"),
    host: "maya",
    length: length(1, 17, 55),
    prezi: "hMjOOn7uaCwWxXGOJbju",
    ambassadors: {
      featured: ["stompy"],
      related: [],
    },
  },
  {
    video: {
      id: "e765859b74e04fcf1972758dd165b264", // Original: f8c3d15f2edff1a24494b6c394aaa9ce
      cu: "agf91muwks8sd9ee",
    },
    edition: "Snake Edition",
    description:
      "Learn about the snake ambassadors at Alveus, Noodle and Patchy, their conversation status, and interactions with humans. We'll also discuss the pet trade and morph breeding, the negative impacts it has on their species, and what you can do to reduce that impact.",
    broadcast: new Date("2024-02-20"),
    host: "maya",
    length: length(1, 25, 8),
    prezi: "7tt98qyUgXTmnIrZqXZa",
    ambassadors: {
      featured: ["noodle", "patchy"],
      related: [],
    },
  },
  {
    video: {
      id: "62728d0e17dcc82256bf604e7cc44ebd", // Original: f5e5ee7d82592ebdd9ae94d40f008a9a
      cu: "agf91muwks8sd9ee",
    },
    edition: "African Bullfrog Edition",
    description:
      "Get to know Georgie, Alveus' African Bullfrog ambassador, and learn about the threats amphibians face in the wild, such as the wildlife trade, habitat loss due to climate change, absorbing pollutants through their skin, and chytrid fungus.",
    broadcast: new Date("2024-03-28"),
    host: "maya",
    length: length(1, 14, 32),
    prezi: "Ke6vGrrEBdsbIO5gDY01",
    ambassadors: {
      featured: ["georgie"],
      related: [],
    },
  },
  {
    video: {
      id: "a2eefa56b79e26dc9dfb005c0e203e22", // Original: 7d0d452767b0a6de6661c271df7b1ca8
      cu: "agf91muwks8sd9ee",
    },
    edition: "Donkey Edition",
    description:
      "Meet the donkeys at Alveus, Serrano and Jalapeño, learn about the history of donkeys and their interaction with humans over time. We'll also discuss the production of ejiao and using wildlife for medicine, how they both impact donkeys, and recommendations to help their species.",
    broadcast: new Date("2024-10-01"),
    host: "maya",
    length: length(1, 4, 41),
    prezi: "WOndDV58mqM8V3JoVL2k",
    ambassadors: {
      featured: ["serrano", "jalapeno"],
      related: [],
    },
  },
  {
    video: {
      id: "f9caac8b0ba3a88aa89c81a43f68fe7d",
      cu: "agf91muwks8sd9ee",
    },
    edition: "Falcon Edition",
    description:
      "Learn about Orion, Alveus' Prairie/Peregrine Falcon, the species as a whole, and the dangers they face in the wild, including bioaccumulation of DDT. We'll also look at falconry, it's origins and current state, and have a live demonstration with Orion.",
    broadcast: new Date("2022-03-07"),
    host: "maya",
    length: length(1, 40, 33),
    prezi: "9IF7H3kPK898Pu2OOmzi",
    ambassadors: {
      featured: ["orion"],
      related: [],
    },
  },
  {
    video: {
      id: "b23f8fca908016bfbc828fa7fa0525fa",
      cu: "agf91muwks8sd9ee",
    },
    edition: "Blue-fronted Amazon Edition",
    description:
      "Get to know Siren, Alveus' Blue-fronted Amazon. Learn about all the different Amazon parrot species and their different colors, why deforestation of the Amazon rainforest is such a threat to them, how the pet trade operates and why a parrot might not be a good pet for you.",
    broadcast: new Date("2022-04-15"),
    host: "maya",
    length: length(1, 57, 0),
    prezi: "5B1wjoAf05UIy6Lgx4Cy",
    ambassadors: {
      featured: ["siren"],
      related: [],
    },
  },
  {
    video: {
      id: "a595e90665ebec3d887363bac0fbb59c",
      cu: "agf91muwks8sd9ee",
    },
    edition: "African Grey Edition",
    description:
      "Meet Mia, Alveus' African Grey ambassador, and learn about what they are like in the wild. We'll explore their feathers and how they fly, why they're endangered as a species, the intelligence of parrots, and why they might not be a great pet to get.",
    broadcast: new Date("2022-05-27"),
    host: "maya",
    length: length(1, 44, 39),
    prezi: "sXfJmJqLTcsqgWc5vaaV",
    ambassadors: {
      featured: ["mia"],
      related: [],
    },
  },
  {
    video: {
      id: "2ebb7148f2a6118432b6ddef15906f54",
      cu: "agf91muwks8sd9ee",
    },
    edition: "Blue and Gold Macaw Edition",
    description:
      "Learn about Tico, Alveus' Blue and Gold Macaw, the species as a whole and where they are found in the wild. We'll discuss the danger that deforestation poses to them and so many other species, how palm oil production is a major cause of deforestation and what we can do to reduce our impact.",
    broadcast: new Date("2022-06-29"),
    host: "maya",
    length: length(1, 45, 47),
    prezi: "yudWPqp2FgUNKGtrdZm6",
    ambassadors: {
      featured: ["tico"],
      related: [],
    },
  },
  {
    video: {
      id: "4cd45990251927be0b1ff1fdfb48e9d4",
      cu: "agf91muwks8sd9ee",
    },
    edition: "Catalina Macaw Edition",
    description:
      "Get to know Miley, Alveus' Catalina Macaw ambassador. Learn about the natural history of macaws, their conservation status and the substantial dangers they face from poachers, as well as what hybridization is and what it means for the species.",
    broadcast: new Date("2022-07-29"),
    host: "maya",
    length: length(1, 46, 22),
    prezi: "2wyIlDVZGx3840kmhxR0",
    ambassadors: {
      featured: ["miley"],
      related: [],
    },
  },
  {
    video: {
      id: "2914f71d68c863eceaddd110896161fc",
      cu: "agf91muwks8sd9ee",
    },
    edition: "Chinchilla Edition",
    description:
      "Meet Moomin and Snork, Alveus' Chinchillas, and learn about the history of chinchillas in the US. We'll explore issues with the pet trade, how the fur trade has made them an endangered species, and what we can do to help.",
    broadcast: new Date("2022-08-31"),
    host: "maya",
    length: length(1, 6, 47),
    prezi: "pMz2Rl8G6NXZyTMzhkaX",
    ambassadors: {
      featured: ["snork", "moomin"],
      related: [],
    },
  },
  {
    video: {
      id: "4e798445a9a59a4a328b032030e22aca",
      cu: "agf91muwks8sd9ee",
    },
    edition: "Crow Edition",
    description:
      "Learn about Abbott and Coconut, Alveus' Crow ambassadors, how crows can become imprinted on humans, and the problems it can cause if they are, as well as the impressive intelligence and social awareness of corvids.",
    broadcast: new Date("2023-01-04"),
    host: "maya",
    length: length(1, 45, 43),
    prezi: "bwIk8qV3E1o0uKQCplTJ",
    ambassadors: {
      featured: ["abbott", "coconut"],
      related: [],
    },
  },
  {
    video: {
      id: "7313973b2cdaadd39a364bcff1e8ca18",
      cu: "agf91muwks8sd9ee",
    },
    edition: "Blue-tongued Skink Edition",
    description:
      "Get to know Toast, Alveus' Blue-tongued Skink, and learn about the history of the species, deimatic display in skinks, and ovoviviparous birth. We'll also investigate the dangers they face in the wild, such as bioaccumlation and biomagnification, as well as the pet trade globally.",
    broadcast: new Date("2023-01-31"),
    host: "maya",
    length: length(1, 18, 8),
    prezi: "ytbpv1gYlAm86DgRpE7H",
    ambassadors: {
      featured: ["toasterStrudel"],
      related: [],
    },
  },
  {
    video: {
      id: "25c04b01928a39ec18867a68491075a6",
      cu: "agf91muwks8sd9ee",
    },
    edition: "Madagascar Hissing Cockroach Edition",
    description:
      "Meet Alveus' Madagascar Hissing Cockroach colony, Barbara and Baked Bean. Understand why cockroaches and other invertebrates are so important to our ecosystem, why we find detritivores in dirty places, and how they're actually here to help us.",
    broadcast: new Date("2023-03-28"),
    host: "maya",
    length: length(1, 24, 24),
    prezi: "EXmO2KVcE0EbfeitwUAT",
    ambassadors: {
      featured: ["barbaraBakedBean"],
      related: [],
    },
  },
  {
    video: {
      id: "d672d27f736c540738e87d3931ca7721",
      cu: "agf91muwks8sd9ee",
    },
    edition: "Beef Edition",
    description:
      "Learn about Winnie, Alveus' Red Angus Beef Cow, the beef industry and commercial agriculture. Discover the impacts it has on our planet, the concerns for animal welfare in the industry, and recommendations for how we can all make a difference.",
    broadcast: new Date("2023-04-29"),
    host: "maya",
    length: length(2, 29, 9),
    prezi: "6EXog4MmHNHLx09ttdbe",
    ambassadors: {
      featured: ["winnieTheMoo"],
      related: [],
    },
  },
  {
    video: {
      id: "b6131e8b2b9505013017243902a65ca1",
      cu: "agf91muwks8sd9ee",
    },
    edition: "Millipede Edition",
    description:
      "Get to know Hank (the tank), Alveus' Smokey Ghost Millipede. Learn why bugs are so important for our planet, how many feet a millipede actually has, the difference between millipedes and centipedes, and what we can do to make sure we're caring for our bug friends.",
    broadcast: new Date("2023-05-31"),
    host: "maya",
    length: length(1, 26, 41),
    prezi: "e14dmFY6klcJE0r25EQy",
    ambassadors: {
      featured: ["hankMrMctrain"],
      related: [],
    },
  },
  {
    video: {
      id: "8f4b7ce6cb83892f2714026d29374f6a",
      cu: "agf91muwks8sd9ee",
    },
    edition: "Rat Edition",
    description:
      "Meet Alveus' rats, Chips and Nilla, in this episode. Learn about the differences between rats and mice, many common misconceptions associated with rats, how rodenticides can lead to bioaccumulation and biomagnification, risks outdoor cats pose to rats, and what we can do to help.",
    broadcast: new Date("2023-06-28"),
    host: "maya",
    length: length(1, 23, 26),
    prezi: "wzMSLtk4pzS10lxN8lAn",
    ambassadors: {
      featured: ["chipsAhoy", "nillaWafer"],
      related: [],
    },
  },
  {
    video: {
      id: "134f8ae3f0aaf07199fa5f872738afdb",
      cu: "agf91muwks8sd9ee",
    },
    edition: "Fox Edition",
    description:
      "Learn about Fenn and Reed, Alveus' American Red Foxes, the differences between European and American Red Foxes, how they hunt for prey using magnetic fields, the impact the fur and exotic pet trades have on foxes, and what we can do to help.",
    broadcast: new Date("2023-07-28"),
    host: "maya",
    length: length(1, 50, 56),
    prezi: "YadZc7hkUA2KI4cGfCV4",
    ambassadors: {
      featured: ["fenn", "reed"],
      related: [],
    },
  },
  {
    video: {
      id: "e9e8a16f9573d089f483acd0dd7ed88a",
      cu: "agf91muwks8sd9ee",
    },
    edition: "Isopod Edition",
    description:
      "Get to know all the isopods at Alveus, Marty our Zebra isopods and BB our Spanish Orange isopods. Learn about what isopods are, as well as why invertebrate conservation is so important for us and why we should care about them.",
    broadcast: new Date("2023-08-31"),
    host: "maya",
    length: length(1, 10, 41),
    prezi: "8bVarKy0mKSvgdl9objv",
    ambassadors: {
      featured: ["marty", "bb"],
      related: [],
    },
  },
  {
    video: {
      id: "7716869c1164befc08d45bbc057efbe9",
      cu: "agf91muwks8sd9ee",
    },
    edition: "Marmoset Edition",
    description:
      "Meet the marmosets at Alveus, Momo and Appa, in this Animal Quest episode. Learn about the history and diet of marmosets, why deforestation is such a threat to them and our planet, the dangers of palm oil production and the exotic pet trade.",
    broadcast: new Date("2023-09-26"),
    host: "maya",
    length: length(2, 25, 21),
    prezi: "MiQTpWL5gCQJpei9Yosz",
    ambassadors: {
      featured: ["momo", "appa"],
      related: [],
    },
  },
  {
    video: {
      id: "785b557c26edb9f75f91dabd40abf0cb",
      cu: "agf91muwks8sd9ee",
    },
    edition: "Scorpion Edition",
    description:
      "Learn about Puppy and Tortellini, Alveus' Emperor scorpions, the natural history of scorpions including their venom, the biodiversity of scorpions, how they've adapted to their environment, and what we can do to help all invertebrates.",
    broadcast: new Date("2023-10-30"),
    host: "maya",
    length: length(1, 25, 56),
    prezi: "1fJkJdqGVN2mk4Ph46kZ",
    ambassadors: {
      featured: ["puppy", "tortellini"],
      related: [],
    },
  },
  {
    video: {
      id: "abc2aa53fe83e3460cdb5f0c86be298a",
      cu: "agf91muwks8sd9ee",
    },
    edition: "Dairy Edition",
    description:
      "Get to know Winnie, Alveus' Red Angus Beef Cow. Learn about the dairy industry and how they operate, from the life of a dairy cow to the production of dairy products. We'll also explore the impact the dairy industry has on our planet, and what we can do to help.",
    broadcast: new Date("2023-11-30"),
    host: "maya",
    length: length(2, 10, 12),
    prezi: "AM31kV6Mv82syKsoQhud",
    ambassadors: {
      featured: ["winnieTheMoo"],
      related: [],
    },
  },
  {
    video: {
      id: "701bee04cef6c0d21458c3c65c54a3b0",
      cu: "agf91muwks8sd9ee",
    },
    edition: "Tortoise Edition",
    description:
      "Meet Push Pop, Alveus' Sulcata Tortoise, in this episode. Learn about the history and endangerment of African Spurred Tortoises, the pet trade and how conservation efforts can help save them, and how we can all make a difference.",
    broadcast: new Date("2024-08-27"),
    host: "maya",
    length: length(1, 7, 13),
    prezi: "UxZPN3llGDZevXDS68rd",
    ambassadors: {
      featured: ["pushPop"],
      related: [],
    },
  },
] as const;

export type AnimalQuestWithEpisode = AnimalQuest & {
  episode: number;
};

const animalQuestEpisodes: Readonly<AnimalQuestWithEpisode[]> = animalQuest.map(
  (quest, index) => ({
    ...quest,
    episode: index + 1,
  }),
);

export type AnimalQuestWithRelation = AnimalQuestWithEpisode & {
  relation: "featured" | "related";
};

export const getAmbassadorEpisodes = (
  ambassador: AmbassadorKey | string,
  type?: "featured" | "related",
): [AnimalQuestWithRelation, ...AnimalQuestWithRelation[]] | undefined => {
  if (!isAmbassadorKey(ambassador)) return undefined;

  // Find all the episodes that have the ambassador featured or related
  const featured: AnimalQuestWithRelation[] = [];
  const related: AnimalQuestWithRelation[] = [];
  for (const quest of animalQuestEpisodes) {
    if (quest.ambassadors.featured.includes(ambassador))
      featured.push({ ...quest, relation: "featured" });
    if (quest.ambassadors.related.includes(ambassador))
      related.push({ ...quest, relation: "related" });
  }

  // If we're looking for a specific type, and we found it, return it
  // or, if we weren't looking for a type, return the first type we found
  // [arr[0], ...arr.slice(1)] is a hack to ensure the array is not empty for TS
  if ((!type || type === "featured") && featured[0])
    return [featured[0], ...featured.slice(1)];
  if ((!type || type === "related") && related[0])
    return [related[0], ...related.slice(1)];
};

export default animalQuestEpisodes;
