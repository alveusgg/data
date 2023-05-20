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
    description: "",
    host: "Maya Higa",
    length: 0,
    edition: "Blue-fronted Amazon Edition",
    broadcast: new Date("2022-04-15"),
    ambassadors: ["siren"],
  },
  {
    video: {
      id: 1311168738,
      start: "00h04m48s",
    },
    description: "",
    host: "Maya Higa",
    length: 0,
    edition: "African Grey Edition",
    broadcast: new Date("2022-05-27"),
    ambassadors: ["mia"],
  },
  {
    video: {
      id: 1517729157,
      start: "00h04m26s",
    },
    description: "",
    host: "Maya Higa",
    length: 0,
    edition: "Blue and Gold Macaw Edition",
    broadcast: new Date("2022-06-29"),
    ambassadors: ["tico"],
  },
  {
    video: {
      id: 1551847402,
      start: "00h04m50s",
    },
    description: "",
    host: "Maya Higa",
    length: 0,
    edition: "Catalina Macaw Edition",
    broadcast: new Date("2022-07-29"),
    ambassadors: ["miley"],
  },
  {
    video: {
      id: 1579522727,
      start: "00h06m10s",
    },
    description: "",
    host: "Maya Higa",
    length: 0,
    edition: "Chinchilla Edition",
    broadcast: new Date("2022-08-31"),
    ambassadors: ["snork", "moomin"],
  },
  {
    video: {
      id: 1699499673,
      start: "00h16m41s",
    },
    description: "",
    host: "Maya Higa",
    length: 0,
    edition: "Crow Edition",
    broadcast: new Date("2023-01-04"),
    ambassadors: ["abbott", "coconut"],
  },
  {
    video: {
      id: 1732218911,
      start: "00h15m24s",
    },
    description: "",
    host: "Maya Higa",
    length: 0,
    edition: "Blue-tounged Skink Edition",
    broadcast: new Date("2023-01-31"),
    ambassadors: ["toasterStrudel"],
  },
  {
    video: {
      id: 1778305921,
      start: "00h01m44s",
    },
    description: "",
    host: "Maya Higa",
    length: 0,
    edition: "Madagascar Hissing Cockroach Edition",
    broadcast: new Date("2023-03-28"),
    ambassadors: ["barbaraBakedBean"],
  },
  {
    video: {
      id: 1806823442,
      start: "00h15m35s",
    },
    description: "",
    host: "Maya Higa",
    length: 0,
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
