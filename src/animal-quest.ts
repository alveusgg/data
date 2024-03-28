import { isAmbassadorKey, type AmbassadorKey } from "./ambassadors/core";

type ZeroToNine = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Seconds = `${0 | 1 | 2 | 3 | 4 | 5}${ZeroToNine}s`;
type Minutes = `${0 | 1 | 2 | 3 | 4 | 5}${ZeroToNine}m`;
type Hours = `${`${0 | 1}${ZeroToNine}` | `2${0 | 1 | 2 | 3}`}h`;

type Host = { name: string; link?: string };
type HostKey = keyof typeof hosts;

export const hosts = {
  maya: {
    name: "Maya Higa",
    link: "https://www.alveussanctuary.org/about/maya",
  },
} as const satisfies Record<string, Host>;

export type AnimalQuest = {
  video: {
    id: number;
    start?: `${Hours}${Minutes}${Seconds}`;
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
      id: 2010271362, // Original: 1122488911
      start: "00h00m00s",
    },
    edition: "Chicken Edition",
    description:
      "Get to know Polly and Alveus' other chickens. We'll learn about egg laying, what food labels mean and which ones to look for, the impact the agriculture industry has on the environment, and what you can do to help.",
    broadcast: new Date("2023-12-21"),
    host: "maya",
    length: 60 * 60 + 9 * 60 + 7, // 00:00:00 - 01:09:07
    prezi: "YRnYHgjrgcC4EmnnTq8w",
    ambassadors: {
      featured: ["polly"],
      related: ["oliver", "nugget", "henrique", "henrietta"],
    },
  },
  {
    video: {
      id: 2041730968, // Original: 1180894968
      start: "00h03m56s",
    },
    edition: "Emu Edition",
    description:
      "Meet Stompy, Alveus' Emu, and learn about the threats that his species faces in the wild including the exotic meat trade and production of emu products such as emu oil. We'll also discuss the great emu war of 1932 and the natural history of emus.",
    broadcast: new Date("2024-01-23"),
    host: "maya",
    length: 60 * 60 + 17 * 60 + 26, // 00:03:56 - 01:21:22
    prezi: "hMjOOn7uaCwWxXGOJbju",
    ambassadors: {
      featured: ["stompy"],
      related: [],
    },
  },
  {
    video: {
      id: 2068671661, // Original: 1226537529
      start: "00h08m40s",
    },
    edition: "Snake Edition",
    description:
      "Learn about the snake ambassadors at Alveus, Noodle and Patchy, their conversation status, and interactions with humans. We'll also discuss the pet trade and morph breeding, the negative impacts it has on their species, and what you can do to reduce that impact.",
    broadcast: new Date("2024-02-20"),
    host: "maya",
    length: 60 * 60 + 14 * 60 + 50, // 00:08:40 - 01:23:30
    prezi: "7tt98qyUgXTmnIrZqXZa",
    ambassadors: {
      featured: ["noodle", "patchy"],
      related: [],
    },
  },
  {
    video: {
      id: 2104074430, // Original: 1252271923
      start: "00h23m00s",
    },
    edition: "African Bullfrog Edition",
    description:
      "Get to know Georgie, Alveus' African Bullfrog ambassador, and learn about the threats amphibians face in the wild, such as the wildlife trade, habitat loss due to climate change, absorbing pollutants through their skin, and chytrid fungus.",
    broadcast: new Date("2024-03-28"),
    host: "maya",
    length: 52 * 60, // 00:23:00 - 01:15:00
    prezi: "Ke6vGrrEBdsbIO5gDY01",
    ambassadors: {
      featured: ["georgie"],
      related: [],
    },
  },
  {
    video: {
      id: 1290623454,
      start: "00h03m48s",
    },
    edition: "Donkey Edition",
    description:
      "Meet the donkeys at Alveus, Serrano and Jalapeño, learn about the history of donkeys and their interaction with humans over time. We'll also discuss the production of ejiao and using wildlife for medicine, how they both impact donkeys, and recommendations to help their species.",
    broadcast: new Date("2022-02-07"),
    host: "maya",
    length: 60 * 60 + 40 * 60 + 21, // 00:03:48 - 01:44:09
    prezi: "WOndDV58mqM8V3JoVL2k",
    ambassadors: {
      featured: ["serrano", "jalapeno"],
      related: [],
    },
  },
  {
    video: {
      id: 1421096536,
      start: "00h03m29s",
    },
    edition: "Falcon Edition",
    description:
      "Learn about Orion, Alveus' Prairie/Peregrine Falcon, the species as a whole, and the dangers they face in the wild, including bioaccumulation of DDT. We'll also look at falconry, it's origins and current state, and have a live demonstration with Orion.",
    broadcast: new Date("2022-03-07"),
    host: "maya",
    length: 60 * 60 + 39 * 60 + 1, // 00:03:29 - 01:42:30
    prezi: "9IF7H3kPK898Pu2OOmzi",
    ambassadors: {
      featured: ["orion"],
      related: [],
    },
  },
  {
    video: {
      id: 1456976498,
      start: "00h00m22s",
    },
    edition: "Blue-fronted Amazon Edition",
    description:
      "Get to know Siren, Alveus' Blue-fronted Amazon. Learn about all the different Amazon parrot species and their different colors, why deforestation of the Amazon rainforest is such a threat to them, how the pet trade operates and why a parrot might not be a good pet for you.",
    broadcast: new Date("2022-04-15"),
    host: "maya",
    length: 60 * 60 + 56 * 60 + 18, // 00:00:22 - 01:56:40
    prezi: "5B1wjoAf05UIy6Lgx4Cy",
    ambassadors: {
      featured: ["siren"],
      related: [],
    },
  },
  {
    video: {
      id: 1311168738,
      start: "00h04m48s",
    },
    edition: "African Grey Edition",
    description:
      "Meet Mia, Alveus' African Grey ambassador, and learn about what they are like in the wild. We'll explore their feathers and how they fly, why they're endangered as a species, the intelligence of parrots, and why they might not be a great pet to get.",
    broadcast: new Date("2022-05-27"),
    host: "maya",
    length: 60 * 60 + 43 * 60 + 31, // 00:04:48 - 01:48:19
    prezi: "sXfJmJqLTcsqgWc5vaaV",
    ambassadors: {
      featured: ["mia"],
      related: [],
    },
  },
  {
    video: {
      id: 1517729157,
      start: "00h04m26s",
    },
    edition: "Blue and Gold Macaw Edition",
    description:
      "Learn about Tico, Alveus' Blue and Gold Macaw, the species as a whole and where they are found in the wild. We'll discuss the danger that deforestation poses to them and so many other species, how palm oil production is a major cause of deforestation and what we can do to reduce our impact.",
    broadcast: new Date("2022-06-29"),
    host: "maya",
    length: 60 * 60 + 45 * 60 + 11, // 00:04:26 - 01:49:37
    prezi: "yudWPqp2FgUNKGtrdZm6",
    ambassadors: {
      featured: ["tico"],
      related: [],
    },
  },
  {
    video: {
      id: 1551847402,
      start: "00h04m50s",
    },
    edition: "Catalina Macaw Edition",
    description:
      "Get to know Miley, Alveus' Catalina Macaw ambassador. Learn about the natural history of macaws, their conservation status and the substantial dangers they face from poachers, as well as what hybridization is and what it means for the species.",
    broadcast: new Date("2022-07-29"),
    host: "maya",
    length: 60 * 60 + 45 * 60 + 48, // 00:04:50 - 01:50:38
    prezi: "2wyIlDVZGx3840kmhxR0",
    ambassadors: {
      featured: ["miley"],
      related: [],
    },
  },
  {
    video: {
      id: 1579522727,
      start: "00h06m10s",
    },
    edition: "Chinchilla Edition",
    description:
      "Meet Moomin and Snork, Alveus' Chinchillas, and learn about the history of chinchillas in the US. We'll explore issues with the pet trade, how the fur trade has made them an endangered species, and what we can do to help.",
    broadcast: new Date("2022-08-31"),
    host: "maya",
    length: 60 * 60 + 5 * 60 + 50, // 00:06:10 - 01:12:00
    prezi: "pMz2Rl8G6NXZyTMzhkaX",
    ambassadors: {
      featured: ["snork", "moomin"],
      related: [],
    },
  },
  {
    video: {
      id: 1699499673,
      start: "00h16m41s",
    },
    edition: "Crow Edition",
    description:
      "Learn about Abbott and Coconut, Alveus' Crow ambassadors, how crows can become imprinted on humans, and the problems it can cause if they are, as well as the impressive intelligence and social awareness of corvids.",
    broadcast: new Date("2023-01-04"),
    host: "maya",
    length: 60 * 60 + 42 * 60 + 54, // 00:16:41 - 01:59:35
    prezi: "bwIk8qV3E1o0uKQCplTJ",
    ambassadors: {
      featured: ["abbott", "coconut"],
      related: [],
    },
  },
  {
    video: {
      id: 1732218911,
      start: "00h15m24s",
    },
    edition: "Blue-tounged Skink Edition",
    description:
      "Get to know Toast, Alveus' Blue-tounged Skink, and learn about the history of the species, deimatic display in skinks, and ovoviviparous birth. We'll also investigate the dangers they face in the wild, such as bioaccumlation and biomagnification, as well as the pet trade globally.",
    broadcast: new Date("2023-01-31"),
    host: "maya",
    length: 60 * 60 + 17 * 60 + 13, // 00:15:24 - 01:32:27
    prezi: "ytbpv1gYlAm86DgRpE7H",
    ambassadors: {
      featured: ["toasterStrudel"],
      related: [],
    },
  },
  {
    video: {
      id: 1778305921,
      start: "00h01m44s",
    },
    edition: "Madagascar Hissing Cockroach Edition",
    description:
      "Meet Alveus' Madagascar Hissing Cockroach colony, Barbara and Baked Bean. Understand why cockroaches and other invertebrates are so important to our ecosystem, why we find detritivores in dirty places, and how they're actually here to help us.",
    broadcast: new Date("2023-03-28"),
    host: "maya",
    length: 60 * 60 + 26 * 60 + 22, // 00:01:44 - 01:28:06
    prezi: "EXmO2KVcE0EbfeitwUAT",
    ambassadors: {
      featured: ["barbaraBakedBean"],
      related: [],
    },
  },
  {
    video: {
      id: 1808632737,
      start: "00h03m15s",
    },
    edition: "Beef Edition",
    description:
      "Learn about Winnie, Alveus' Red Angus Beef Cow, the beef industry and commercial agriculture. Discover the impacts it has on our planet, the concerns for animal welfare in the industry, and recommendations for how we can all make a difference.",
    broadcast: new Date("2023-04-29"),
    host: "maya",
    length: 2 * 60 * 60 + 26 * 60 + 30, // 00:03:15 - 02:29:45
    prezi: "6EXog4MmHNHLx09ttdbe",
    ambassadors: {
      featured: ["winnieTheMoo"],
      related: [],
    },
  },
  {
    video: {
      id: 1834295838,
      start: "00h00m06s",
    },
    edition: "Millipede Edition",
    description:
      "Get to know Hank (the tank), Alveus' Smokey Ghost Millipede. Learn why bugs are so important for our planet, how many feet a millipede actually has, the difference between millipedes and centipedes, and what we can do to make sure we're caring for our bug friends.",
    broadcast: new Date("2023-05-31"),
    host: "maya",
    length: 60 * 60 + 26 * 60 + 50, // 00:00:06 - 01:26:56
    prezi: "e14dmFY6klcJE0r25EQy",
    ambassadors: {
      featured: ["hankMrMctrain"],
      related: [],
    },
  },
  {
    video: {
      id: 1858155117,
      start: "00h00m04s",
    },
    edition: "Rat Edition",
    description:
      "Meet Alveus' rats, Chips and Nilla, in this episode. Learn about the differences between rats and mice, many common misconceptions associated with rats, how rodenticides can lead to bioaccumulation and biomagnification, risks outdoor cats pose to rats, and what we can do to help.",
    broadcast: new Date("2023-06-28"),
    host: "maya",
    length: 60 * 60 + 23 * 60 + 22, // 00:00:04 - 01:23:26
    prezi: "wzMSLtk4pzS10lxN8lAn",
    ambassadors: {
      featured: ["chipsAhoy", "nillaWafer"],
      related: [],
    },
  },
  {
    video: {
      id: 1883241541,
      start: "00h00m00s",
    },
    edition: "Fox Edition",
    description:
      "Learn about Fenn and Reed, Alveus' American Red Foxes, the differences between European and American Red Foxes, how they hunt for prey using magnetic fields, the impact the fur and exotic pet trades have on foxes, and what we can do to help.",
    broadcast: new Date("2023-07-28"),
    host: "maya",
    length: 60 * 60 + 51 * 60 + 10, // 00:00:00 - 01:51:10
    prezi: "YadZc7hkUA2KI4cGfCV4",
    ambassadors: {
      featured: ["fenn", "reed"],
      related: [],
    },
  },
  {
    video: {
      id: 1913532698,
      start: "00h00m05s",
    },
    edition: "Isopod Edition",
    description:
      "Get to know all the isopods at Alveus, Marty our Zebra isopods and BB our Spanish Orange isopods. Learn about what isopods are, as well as why invertebrate conservation is so important for us and why we should care about them.",
    broadcast: new Date("2023-08-31"),
    host: "maya",
    length: 60 * 60 + 10 * 60 + 50, // 00:00:05 - 01:10:55
    prezi: "8bVarKy0mKSvgdl9objv",
    ambassadors: {
      featured: ["marty", "bb"],
      related: [],
    },
  },
  {
    video: {
      id: 1935840442,
      start: "00h00m00s",
    },
    edition: "Marmoset Edition",
    description:
      "Meet the marmosets at Alveus, Momo and Appa, in this Animal Quest episode. Learn about the history and diet of marmosets, why deforestation is such a threat to them and our planet, the dangers of palm oil production and the exotic pet trade.",
    broadcast: new Date("2023-09-26"),
    host: "maya",
    length: 2 * 60 * 60 + 25 * 60 + 31, // 00:00:00 - 02:25:31
    prezi: "MiQTpWL5gCQJpei9Yosz",
    ambassadors: {
      featured: ["momo", "appa"],
      related: [],
    },
  },
  {
    video: {
      id: 1964315303,
      start: "00h00m00s",
    },
    edition: "Scorpion Edition",
    description:
      "Learn about Puppy and Tortellini, Alveus' Emperor scorpions, the natural history of scorpions including their venom, the biodiversity of scorpions, how they've adapted to their environment, and what we can do to help all invertebrates.",
    broadcast: new Date("2023-10-30"),
    host: "maya",
    length: 60 * 60 + 25 * 60 + 50, // 00:00:00 - 01:25:50
    prezi: "1fJkJdqGVN2mk4Ph46kZ",
    ambassadors: {
      featured: ["puppy", "tortellini"],
      related: [],
    },
  },
  {
    video: {
      id: 1991494103,
      start: "00h00m00s",
    },
    edition: "Dairy Edition",
    description:
      "Get to know Winnie, Alveus' Red Angus Beef Cow. Learn about the dairy industry and how they operate, from the life of a dairy cow to the production of dairy products. We'll also explore the impact the dairy industry has on our planet, and what we can do to help.",
    broadcast: new Date("2023-11-30"),
    host: "maya",
    length: 2 * 60 * 60 + 10 * 60 + 30, // 00:00:00 - 02:10:30
    prezi: "AM31kV6Mv82syKsoQhud",
    ambassadors: {
      featured: ["winnieTheMoo"],
      related: [],
    },
  },
] as const;

export type AnimalQuestWithEpisode = AnimalQuest & {
  episode: number;
};

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
  for (const [index, quest] of animalQuest.entries()) {
    if (quest.ambassadors.featured.includes(ambassador))
      featured.push({ ...quest, episode: index + 1, relation: "featured" });
    if (quest.ambassadors.related.includes(ambassador))
      related.push({ ...quest, episode: index + 1, relation: "related" });
  }

  // If we're looking for a specific type, and we found it, return it
  // or, if we weren't looking for a type, return the first type we found
  // [arr[0], ...arr.slice(1)] is a hack to ensure the array is not empty for TS
  if ((!type || type === "featured") && featured[0])
    return [featured[0], ...featured.slice(1)];
  if ((!type || type === "related") && related[0])
    return [related[0], ...related.slice(1)];
};

export default animalQuest;
