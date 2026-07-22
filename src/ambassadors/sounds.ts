import { isAmbassadorKey, type AmbassadorKey } from "./core.ts";

// Importing the audio files from assets
import miaSound1 from "../assets/ambassadors/mia/01.mp3";
import abbottSound1 from "../assets/ambassadors/abbott/01.mp3";
import jalapenoSound1 from "../assets/ambassadors/jalapeno/01.mp3";
import serranoSound1 from "../assets/ambassadors/serrano/01.mp3";

type SoundMp3 = (typeof import("*.mp3"))["default"];
type SoundImport = SoundMp3;

export type AmbassadorSound = {
  src: SoundImport;
  caption: string;
};

export type AmbassadorSounds = [AmbassadorSound, ...AmbassadorSound[]];

// Not required for each ambassador
const ambassadorSounds: Partial<{
  [key in AmbassadorKey]: AmbassadorSounds;
}> = {
  mia: [{ src: miaSound1, caption: "Mia's Chirps" }],
  abbott: [{ src: abbottSound1, caption: "Abbott's Call" }],
  jalapeno: [{ src: jalapenoSound1, caption: "Jalapeno's Bray" }],
  serrano: [{ src: serranoSound1, caption: "Serrano's Bray" }],
};

export const getAmbassadorSounds = (
  ambassador: AmbassadorKey | string,
): AmbassadorSounds | undefined => {
  if (!isAmbassadorKey(ambassador)) return undefined;
  return ambassadorSounds[ambassador];
};
