import { isAmbassadorKey, type AmbassadorKey } from "./ambassadors/core";

type ZeroToNine = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Seconds = `${0 | 1 | 2 | 3 | 4 | 5}${ZeroToNine}s`;
type Minutes = `${0 | 1 | 2 | 3 | 4 | 5}${ZeroToNine}m`;
type Hours = `${`${0 | 1}${ZeroToNine}` | `2${0 | 1 | 2 | 3}`}h`;

export type AnimalQuest = {
  video: {
    id: number;
    start?: `${Hours}${Minutes}${Seconds}`;
  };
  description: string;
  host: string;
  length: number;
  edition: string;
  broadcast: Date;
  ambassadors: Readonly<AmbassadorKey[]>;
};

const animalQuest: Readonly<AnimalQuest[]> = [
  {
    video: {
      id: 1122488911,
      start: "00h02m03s",
    },
    description: "",
    host: "Maya Higa",
    length: 0,
    edition: "Chicken Edition",
    broadcast: new Date("2021-08-16"),
    ambassadors: ["oliver", "nugget", "henrique"],
  },
  {
    video: {
      id: 1180894968,
      start: "00h00m27s",
    },
    description: "",
    host: "Maya Higa",
    length: 0,
    edition: "Emu Edition",
    broadcast: new Date("2021-10-18"),
    ambassadors: ["stompy"],
  },
  {
    video: {
      id: 1226537529,
      start: "00h00m21s",
    },
    description: "",
    host: "Maya Higa",
    length: 0,
    edition: "Snake Edition",
    broadcast: new Date("2021-12-06"),
    ambassadors: ["noodle", "patchy"],
  },
  {
    video: {
      id: 1252271923,
      start: "00h00m59s",
    },
    description: "",
    host: "Maya Higa",
    length: 0,
    edition: "African Bullfrog Edition",
    broadcast: new Date("2022-01-03"),
    ambassadors: ["georgie"],
  },
  {
    video: {
      id: 1290623454,
      start: "00h03m48s",
    },
    description: "",
    host: "Maya Higa",
    length: 0,
    edition: "Donkey Edition",
    broadcast: new Date("2022-02-07"),
    ambassadors: ["serrano", "jalapeno"],
  },
  {
    video: {
      id: 1421096536,
      start: "00h03m29s",
    },
    description: "",
    host: "Maya Higa",
    length: 0,
    edition: "Falcon Edition",
    broadcast: new Date("2022-03-07"),
    ambassadors: ["orion"],
  },
  {
    video: {
      id: 1456976498,
      start: "00h00m22s",
    },
    description:
      "Get to know Siren, Alveus' Blue-fronted Amazon. Learn about all the different Amazon parrot species and their different colors, why deforestation of the Amazon rainforest is such a threat to them, how the pet trade operates and why a parrot might not be a good pet for you.",
    host: "Maya Higa",
    length: 60 * 60 + 56 * 60 + 18, // 00:00:22 - 01:56:40
    edition: "Blue-fronted Amazon Edition",
    broadcast: new Date("2022-04-15"),
    ambassadors: ["siren"],
  },
  {
    video: {
      id: 1311168738,
      start: "00h04m48s",
    },
    description:
      "Meet Mia, Alveus' African Grey ambassador, and learn about what they are like in the wild. We'll explore their feathers and how they fly, why they're endangered as a species, the intelligence of parrots, and why they might not be a great pet to get.",
    host: "Maya Higa",
    length: 60 * 60 + 43 * 60 + 31, // 00:04:48 - 01:48:19
    edition: "African Grey Edition",
    broadcast: new Date("2022-05-27"),
    ambassadors: ["mia"],
  },
  {
    video: {
      id: 1517729157,
      start: "00h04m26s",
    },
    description:
      "Learn about Tico, Alveus' Blue and Gold Macaw, the species as a whole and where they are found in the wild. We'll discuss the danger that deforestation poses to them and so many other species, how palm oil production is a major cause of deforestation and what we can do to reduce our impact.",
    host: "Maya Higa",
    length: 60 * 60 + 45 * 60 + 11, // 00:04:26 - 01:49:37
    edition: "Blue and Gold Macaw Edition",
    broadcast: new Date("2022-06-29"),
    ambassadors: ["tico"],
  },
  {
    video: {
      id: 1551847402,
      start: "00h04m50s",
    },
    description:
      "Get to know Miley, Alveus' Catalina Macaw ambassador. Learn about the natural history of macaws, their conservation status and the substantial dangers they face from poachers, as well as what hybridization is and what it means for the species.",
    host: "Maya Higa",
    length: 60 * 60 + 45 * 60 + 48, // 00:04:50 - 01:50:38
    edition: "Catalina Macaw Edition",
    broadcast: new Date("2022-07-29"),
    ambassadors: ["miley"],
  },
  {
    video: {
      id: 1579522727,
      start: "00h06m10s",
    },
    description:
      "Meet Moomin and Snork, Alveus' Chinchillas, and learn about the history of chinchillas in the US. We'll explore issues with the pet trade, how the fur trade has made them an endangered species, and what we can do to help.",
    host: "Maya Higa",
    length: 60 * 60 + 5 * 60 + 50, // 00:06:10 - 01:12:00
    edition: "Chinchilla Edition",
    broadcast: new Date("2022-08-31"),
    ambassadors: ["snork", "moomin"],
  },
  {
    video: {
      id: 1699499673,
      start: "00h16m41s",
    },
    description:
      "Learn about Abbott and Coconut, Alveus' Crow ambassadors, how crows can become imprinted on humans, and the problems it can cause if they are, as well as the impressive intelligence and social awareness of corvids.",
    host: "Maya Higa",
    length: 60 * 60 + 42 * 60 + 54, // 00:16:41 - 01:59:35
    edition: "Crow Edition",
    broadcast: new Date("2023-01-04"),
    ambassadors: ["abbott", "coconut"],
  },
  {
    video: {
      id: 1732218911,
      start: "00h15m24s",
    },
    description:
      "Get to know Toast, Alveus' Blue-tounged Skink, and learn about the history of the species. Learn about deimatic display in skinks and ovoviviparous birth. We'll also investigate the dangers they face in the wild, such as bioaccumlation and biomagnification, as well as the pet trade globally.",
    host: "Maya Higa",
    length: 60 * 60 + 17 * 60 + 13, // 00:15:24 - 01:32:27
    edition: "Blue-tounged Skink Edition",
    broadcast: new Date("2023-01-31"),
    ambassadors: ["toasterStrudel"],
  },
  {
    video: {
      id: 1778305921,
      start: "00h01m44s",
    },
    description:
      "Meet Alveus' Madagascar Hissing Cockroach colony, Barbara and Baked Bean. Understand why cockroaches and other invertebrates are so important to our ecosystem, why we find detritivores in dirty places, and how they're actually here to help us.",
    host: "Maya Higa",
    length: 60 * 60 + 26 * 60 + 22, // 00:01:44 - 01:28:06
    edition: "Madagascar Hissing Cockroach Edition",
    broadcast: new Date("2023-03-28"),
    ambassadors: ["barbaraBakedBean"],
  },
  {
    video: {
      id: 1806823442,
      start: "00h15m35s",
    },
    description:
      "Learn about Winnie, Alveus' Red Angus Beef Cow, the beef industry and commercial agriculture. Discover the impacts it has on our plant and recommendations for how we can all make a difference.",
    host: "Maya Higa",
    length: 2 * 60 * 60 + 26 * 60 + 36, // 00:15:35 - 02:42:10
    edition: "Cow Edition",
    broadcast: new Date("2023-04-29"),
    ambassadors: ["winnieTheMoo"],
  },
] as const;

export type AnimalQuestWithEpisode = AnimalQuest & {
  episode: number;
};

export const getAmbassadorEpisode = (
  ambassador: AmbassadorKey | string
): AnimalQuestWithEpisode | undefined => {
  if (!isAmbassadorKey(ambassador)) return undefined;

  for (const [index, quest] of animalQuest.entries()) {
    if (quest.ambassadors.includes(ambassador)) {
      return { ...quest, episode: index + 1 };
    }
  }
};

export default animalQuest;
