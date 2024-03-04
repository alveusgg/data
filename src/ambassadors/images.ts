import { isAmbassadorKey, type Ambassadors, type AmbassadorKey } from "./core";
import {
  isAmbassadorWithPlushKey,
  type AmbassadorWithPlushKey,
} from "./filters";

import abbottImage1 from "../../assets/ambassadors/abbott/01.jpg";
import abbottImage2 from "../../assets/ambassadors/abbott/02.jpg";
import abbottImage3 from "../../assets/ambassadors/abbott/03.png";

import appaImage1 from "../../assets/ambassadors/appa/01.jpg";
import appaImage2 from "../../assets/ambassadors/appa/02.jpg";
import appaImage3 from "../../assets/ambassadors/appa/03.jpg";

import barbaraBakedBeanImage1 from "../../assets/ambassadors/barbaraBakedBean/01.jpg";
import barbaraBakedBeanImage2 from "../../assets/ambassadors/barbaraBakedBean/02.jpg";
import barbaraBakedBeanImage3 from "../../assets/ambassadors/barbaraBakedBean/03.jpg";

import bbImage1 from "../../assets/ambassadors/bb/01.jpg";
import bbImage2 from "../../assets/ambassadors/bb/02.jpg";

import chipsAhoyImage1 from "../../assets/ambassadors/chipsAhoy/01.jpg";
import chipsAhoyImage2 from "../../assets/ambassadors/chipsAhoy/02.jpg";

import coconutImage1 from "../../assets/ambassadors/coconut/01.png";
import coconutImage2 from "../../assets/ambassadors/coconut/02.jpg";

import duckyImage1 from "../../assets/ambassadors/ducky/01.jpg";
import duckyImage2 from "../../assets/ambassadors/ducky/02.jpg";

import fennImage1 from "../../assets/ambassadors/fenn/01.jpg";
import fennImage2 from "../../assets/ambassadors/fenn/02.jpg";
import fennImage3 from "../../assets/ambassadors/fenn/03.jpg";
import fennImage4 from "../../assets/ambassadors/fenn/04.jpg";
import fennImage5 from "../../assets/ambassadors/fenn/05.jpg";

import georgieImage1 from "../../assets/ambassadors/georgie/01.jpg";
import georgieImage2 from "../../assets/ambassadors/georgie/02.jpg";
import georgieImage3 from "../../assets/ambassadors/georgie/03.jpg";
import georgieImage4 from "../../assets/ambassadors/georgie/04.png";
import georgieImage5 from "../../assets/ambassadors/georgie/05.jpg";
import georgieImageMerch from "../../assets/ambassadors/georgie/merch.jpg";

import hankMrMctrainImage1 from "../../assets/ambassadors/hankMrMctrain/01.jpg";
import hankMrMctrainImage2 from "../../assets/ambassadors/hankMrMctrain/02.jpg";
import hankMrMctrainImage3 from "../../assets/ambassadors/hankMrMctrain/03.jpg";

import henriettaImage1 from "../../assets/ambassadors/henrietta/01.jpg";

import henriqueImage1 from "../../assets/ambassadors/henrique/01.jpg";
import henriqueImage2 from "../../assets/ambassadors/henrique/02.jpg";
import henriqueImage3 from "../../assets/ambassadors/henrique/03.jpg";

import jalapenoImage1 from "../../assets/ambassadors/jalapeno/01.jpg";
import jalapenoImage2 from "../../assets/ambassadors/jalapeno/02.jpg";
import jalapenoImage3 from "../../assets/ambassadors/jalapeno/03.jpg";
import jalapenoImage4 from "../../assets/ambassadors/jalapeno/04.png";
import jalapenoImage5 from "../../assets/ambassadors/jalapeno/05.jpg";

import martyImage1 from "../../assets/ambassadors/marty/01.jpg";
import martyImage2 from "../../assets/ambassadors/marty/02.jpg";
import martyImage3 from "../../assets/ambassadors/marty/03.jpg";

import miaImage1 from "../../assets/ambassadors/mia/01.jpg";
import miaImage2 from "../../assets/ambassadors/mia/02.jpg";
import miaImage3 from "../../assets/ambassadors/mia/03.jpg";
import miaImage4 from "../../assets/ambassadors/mia/04.jpg";
import miaImage5 from "../../assets/ambassadors/mia/05.jpg";

import mileyImage1 from "../../assets/ambassadors/miley/01.jpg";
import mileyImage2 from "../../assets/ambassadors/miley/02.jpg";
import mileyImage3 from "../../assets/ambassadors/miley/03.jpg";
import mileyImage4 from "../../assets/ambassadors/miley/04.jpg";

import momoImage1 from "../../assets/ambassadors/momo/01.jpg";

import moominImage1 from "../../assets/ambassadors/moomin/01.jpg";
import moominImage2 from "../../assets/ambassadors/moomin/02.jpg";

import nillaWaferImage1 from "../../assets/ambassadors/nillaWafer/01.jpg";
import nillaWaferImage2 from "../../assets/ambassadors/nillaWafer/02.jpg";

import noodleImage1 from "../../assets/ambassadors/noodle/01.jpg";
import noodleImage2 from "../../assets/ambassadors/noodle/02.jpg";
import noodleImage3 from "../../assets/ambassadors/noodle/03.jpg";
import noodleImage4 from "../../assets/ambassadors/noodle/04.jpg";

import nuggetImage1 from "../../assets/ambassadors/nugget/01.jpg";
import nuggetImage2 from "../../assets/ambassadors/nugget/02.jpg";
import nuggetImage3 from "../../assets/ambassadors/nugget/03.jpg";

import oliverImage1 from "../../assets/ambassadors/oliver/01.jpg";
import oliverImage2 from "../../assets/ambassadors/oliver/02.jpg";
import oliverImage3 from "../../assets/ambassadors/oliver/03.jpg";

import orionImage1 from "../../assets/ambassadors/orion/01.jpg";

import patchyImage1 from "../../assets/ambassadors/patchy/01.png";
import patchyImage2 from "../../assets/ambassadors/patchy/02.jpg";

import picklesImage1 from "../../assets/ambassadors/pickles/01.jpg";

import pollyImage1 from "../../assets/ambassadors/polly/01.jpg";

import puppyImage1 from "../../assets/ambassadors/puppy/01.jpg";

import pushPopImage1 from "../../assets/ambassadors/pushPop/01.jpg";
import pushPopImage2 from "../../assets/ambassadors/pushPop/02.jpg";

import reedImage1 from "../../assets/ambassadors/reed/01.jpg";
import reedImage2 from "../../assets/ambassadors/reed/02.jpg";
import reedImage3 from "../../assets/ambassadors/reed/03.jpg";
import reedImage4 from "../../assets/ambassadors/reed/04.jpg";
import reedImage5 from "../../assets/ambassadors/reed/05.jpg";

import serranoImage1 from "../../assets/ambassadors/serrano/01.jpg";
import serranoImage2 from "../../assets/ambassadors/serrano/02.jpg";
import serranoImage3 from "../../assets/ambassadors/serrano/03.jpg";
import serranoImage4 from "../../assets/ambassadors/serrano/04.jpg";

import sirenImage1 from "../../assets/ambassadors/siren/01.jpg";
import sirenImage2 from "../../assets/ambassadors/siren/02.jpg";
import sirenImage3 from "../../assets/ambassadors/siren/03.jpg";
import sirenImage4 from "../../assets/ambassadors/siren/04.jpg";
import sirenImage5 from "../../assets/ambassadors/siren/05.jpg";
import sirenImage6 from "../../assets/ambassadors/siren/06.jpg";
import sirenImage7 from "../../assets/ambassadors/siren/07.jpg";
import sirenImageMerch from "../../assets/ambassadors/siren/merch.png";

import snorkImage1 from "../../assets/ambassadors/snork/01.jpg";
import snorkImage2 from "../../assets/ambassadors/snork/02.jpg";

import stompyImage1 from "../../assets/ambassadors/stompy/01.jpg";
import stompyImage2 from "../../assets/ambassadors/stompy/02.jpg";
import stompyImage3 from "../../assets/ambassadors/stompy/03.jpg";
import stompyImage4 from "../../assets/ambassadors/stompy/04.jpg";
import stompyImage5 from "../../assets/ambassadors/stompy/05.jpg";
import stompyImage6 from "../../assets/ambassadors/stompy/06.jpg";
import stompyImageMerch from "../../assets/ambassadors/stompy/merch.jpg";

import ticoImage1 from "../../assets/ambassadors/tico/01.jpg";
import ticoImage2 from "../../assets/ambassadors/tico/02.jpg";
import ticoImage3 from "../../assets/ambassadors/tico/03.jpg";

import toasterStrudelImage1 from "../../assets/ambassadors/toasterStrudel/01.jpg";
import toasterStrudelImage2 from "../../assets/ambassadors/toasterStrudel/02.jpg";
import toasterStrudelImage3 from "../../assets/ambassadors/toasterStrudel/03.jpg";
import toasterStrudelImage4 from "../../assets/ambassadors/toasterStrudel/04.jpg";
import toasterStrudelImage5 from "../../assets/ambassadors/toasterStrudel/05.jpg";

import tortelliniImage1 from "../../assets/ambassadors/tortellini/01.jpg";
import tortelliniImage2 from "../../assets/ambassadors/tortellini/02.jpg";

import winnieTheMooImage1 from "../../assets/ambassadors/winnieTheMoo/01.jpg";
import winnieTheMooImage2 from "../../assets/ambassadors/winnieTheMoo/02.jpg";
import winnieTheMooImage3 from "../../assets/ambassadors/winnieTheMoo/03.jpg";
import winnieTheMooImage4 from "../../assets/ambassadors/winnieTheMoo/04.jpg";
import winnieTheMooImage5 from "../../assets/ambassadors/winnieTheMoo/05.jpg";
import winnieTheMooImage6 from "../../assets/ambassadors/winnieTheMoo/06.jpg";
import winnieTheMooImage7 from "../../assets/ambassadors/winnieTheMoo/07.jpg";
import winnieTheMooImageMerch from "../../assets/ambassadors/winnieTheMoo/merch.png";

type OneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type ZeroToNine = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Percentage = `${OneToNine}${ZeroToNine}%` | `${ZeroToNine}%` | "100%";

export type AmbassadorImage = {
  src: typeof stompyImage1;
  alt: string;
  position?: `${Percentage} ${Percentage}`;
};
export type AmbassadorImages = [AmbassadorImage, ...AmbassadorImage[]];

const ambassadorImages: {
  [key in AmbassadorKey]: AmbassadorImages;
} = {
  abbott: [
    { src: abbottImage1, alt: "Abbott the American Crow" },
    { src: abbottImage2, alt: "Abbott the American Crow" },
    { src: abbottImage3, alt: "Abbott the American Crow", position: "0% 0%" },
  ],
  appa: [
    { src: appaImage1, alt: "Appa the Common Marmoset", position: "50% 25%" },
    { src: appaImage2, alt: "Appa the Common Marmoset", position: "50% 0%" },
    { src: appaImage3, alt: "Appa the Common Marmoset" },
  ],
  barbaraBakedBean: [
    {
      src: barbaraBakedBeanImage1,
      alt: "Barbara / Baked Bean the Madagascar Hissing Cockroaches",
    },
    {
      src: barbaraBakedBeanImage2,
      alt: "Barbara / Baked Bean the Madagascar Hissing Cockroaches",
    },
    {
      src: barbaraBakedBeanImage3,
      alt: "Barbara / Baked Bean the Madagascar Hissing Cockroaches",
    },
  ],
  bb: [
    { src: bbImage1, alt: "BB the Spanish Orange Isopods" },
    { src: bbImage2, alt: "BB the Spanish Orange Isopods" },
  ],
  chipsAhoy: [
    { src: chipsAhoyImage1, alt: "Chips Ahoy the Rat" },
    { src: chipsAhoyImage2, alt: "Chips Ahoy the Rat" },
  ],
  coconut: [
    {
      src: coconutImage1,
      alt: "Coconut the American Crow",
      position: "50% 30%",
    },
    { src: coconutImage2, alt: "Coconut the American Crow" },
  ],
  ducky: [
    { src: duckyImage1, alt: "Ducky the Rubber Ducky Isopods" },
    { src: duckyImage2, alt: "Ducky the Rubber Ducky Isopods" },
  ],
  fenn: [
    { src: fennImage1, alt: "Fenn the American Red Fox", position: "50% 35%" },
    { src: fennImage2, alt: "Fenn the American Red Fox" },
    { src: fennImage3, alt: "Fenn the American Red Fox" },
    { src: fennImage4, alt: "Fenn the American Red Fox" },
    { src: fennImage5, alt: "Fenn the American Red Fox" },
  ],
  georgie: [
    { src: georgieImage1, alt: "Georgie the African Bullfrog" },
    { src: georgieImage2, alt: "Georgie the African Bullfrog" },
    { src: georgieImage3, alt: "Georgie the African Bullfrog" },
    { src: georgieImage4, alt: "Georgie the African Bullfrog" },
    { src: georgieImage5, alt: "Georgie the African Bullfrog" },
  ],
  hankMrMctrain: [
    { src: hankMrMctrainImage1, alt: "Hank the Smokey Ghost Millipede" },
    { src: hankMrMctrainImage2, alt: "Hank the Smokey Ghost Millipede" },
    {
      src: hankMrMctrainImage3,
      alt: "Hank the Smokey Ghost Millipede",
      position: "50% 0%",
    },
  ],
  henrietta: [
    { src: henriettaImage1, alt: "Henrietta the Jersey Giant Chicken" },
  ],
  henrique: [
    {
      src: henriqueImage1,
      alt: "Henrique the Half Dark Brahma, Half Saipan Chicken",
      position: "50% 20%",
    },
    {
      src: henriqueImage2,
      alt: "Henrique the Half Dark Brahma, Half Saipan Chicken",
    },
    {
      src: henriqueImage3,
      alt: "Henrique the Half Dark Brahma, Half Saipan Chicken",
      position: "100% 25%",
    },
  ],
  jalapeno: [
    { src: jalapenoImage1, alt: "Jalapeño the Domestic Donkey" },
    { src: jalapenoImage2, alt: "Jalapeño the Domestic Donkey" },
    { src: jalapenoImage3, alt: "Jalapeño the Domestic Donkey" },
    { src: jalapenoImage4, alt: "Jalapeño the Domestic Donkey" },
    { src: jalapenoImage5, alt: "Jalapeño the Domestic Donkey" },
  ],
  marty: [
    { src: martyImage1, alt: "Marty the Zebra Isopods", position: "50% 100%" },
    { src: martyImage2, alt: "Marty the Zebra Isopods" },
    { src: martyImage3, alt: "Marty the Zebra Isopods" },
  ],
  mia: [
    { src: miaImage1, alt: "Mia the African Grey", position: "50% 10%" },
    { src: miaImage2, alt: "Mia the African Grey" },
    { src: miaImage3, alt: "Mia the African Grey" },
    { src: miaImage4, alt: "Mia the African Grey", position: "0% 50%" },
    { src: miaImage5, alt: "Mia the African Grey", position: "0% 50%" },
  ],
  miley: [
    { src: mileyImage1, alt: "Miley the Catalina Macaw", position: "50% 0%" },
    { src: mileyImage2, alt: "Miley the Catalina Macaw", position: "50% 0%" },
    { src: mileyImage3, alt: "Miley the Catalina Macaw", position: "0% 0%" },
    { src: mileyImage4, alt: "Miley the Catalina Macaw", position: "0% 50%" },
  ],
  momo: [
    {
      src: momoImage1,
      alt: "Momo the Black Tufted Marmoset",
      position: "0% 0%",
    },
  ],
  moomin: [
    { src: moominImage1, alt: "Moomin the Chinchilla" },
    { src: moominImage2, alt: "Moomin the Chinchilla" },
  ],
  nillaWafer: [
    { src: nillaWaferImage1, alt: "Nilla Wafer the Rat" },
    { src: nillaWaferImage2, alt: "Nilla Wafer the Rat" },
  ],
  noodle: [
    { src: noodleImage1, alt: "Noodle the Carpet Python" },
    { src: noodleImage2, alt: "Noodle the Carpet Python" },
    { src: noodleImage3, alt: "Noodle the Carpet Python", position: "75% 50%" },
    { src: noodleImage4, alt: "Noodle the Carpet Python", position: "0% 100%" },
  ],
  nugget: [
    {
      src: nuggetImage1,
      alt: "Nugget the Ameraucana Chicken",
      position: "100% 0%",
    },
    { src: nuggetImage2, alt: "Nugget the Ameraucana Chicken" },
    { src: nuggetImage3, alt: "Nugget the Ameraucana Chicken" },
  ],
  oliver: [
    {
      src: oliverImage1,
      alt: "Oliver the Olive Egger Chicken",
      position: "75% 0%",
    },
    {
      src: oliverImage2,
      alt: "Oliver the Olive Egger Chicken",
      position: "0% 0%",
    },
    {
      src: oliverImage3,
      alt: "Oliver the Olive Egger Chicken",
      position: "25% 0%",
    },
  ],
  orion: [{ src: orionImage1, alt: "Orion the Prairie/Peregrine Falcon" }],
  patchy: [
    { src: patchyImage1, alt: "Patchy the Ball Python", position: "50% 100%" },
    { src: patchyImage2, alt: "Patchy the Ball Python" },
  ],
  pickles: [{ src: picklesImage1, alt: "Pickles the Vinegaroon" }],
  polly: [{ src: pollyImage1, alt: "Polly the Silkie Chicken" }],
  puppy: [{ src: puppyImage1, alt: "Puppy the Emperor Scorpion" }],
  pushPop: [
    { src: pushPopImage1, alt: "Push Pop the Sulcata Tortoise" },
    { src: pushPopImage2, alt: "Push Pop the Sulcata Tortoise" },
  ],
  reed: [
    { src: reedImage1, alt: "Reed the American Red Fox" },
    { src: reedImage2, alt: "Reed the American Red Fox" },
    { src: reedImage3, alt: "Reed the American Red Fox" },
    { src: reedImage4, alt: "Reed the American Red Fox" },
    { src: reedImage5, alt: "Reed the American Red Fox" },
  ],
  serrano: [
    { src: serranoImage1, alt: "Serrano the Domestic Donkey" },
    { src: serranoImage2, alt: "Serrano the Domestic Donkey" },
    {
      src: serranoImage3,
      alt: "Serrano the Domestic Donkey",
      position: "50% 25%",
    },
    { src: serranoImage4, alt: "Serrano the Domestic Donkey" },
  ],
  siren: [
    {
      src: sirenImage1,
      alt: "Siren the Blue-fronted Amazon",
      position: "100% 50%",
    },
    {
      src: sirenImage2,
      alt: "Siren the Blue-fronted Amazon",
      position: "50% 0%",
    },
    {
      src: sirenImage3,
      alt: "Siren the Blue-fronted Amazon",
      position: "0% 50%",
    },
    { src: sirenImage4, alt: "Siren the Blue-fronted Amazon" },
    { src: sirenImage5, alt: "Siren the Blue-fronted Amazon" },
    { src: sirenImage6, alt: "Siren the Blue-fronted Amazon" },
    { src: sirenImage7, alt: "Siren the Blue-fronted Amazon" },
  ],
  snork: [
    { src: snorkImage1, alt: "Snork the Chinchilla", position: "0% 50%" },
    { src: snorkImage2, alt: "Snork the Chinchilla", position: "50% 0%" },
  ],
  stompy: [
    { src: stompyImage1, alt: "Stompy the Emu", position: "50% 30%" },
    { src: stompyImage2, alt: "Stompy the Emu" },
    { src: stompyImage3, alt: "Stompy the Emu" },
    { src: stompyImage4, alt: "Stompy the Emu", position: "25% 0%" },
    { src: stompyImage5, alt: "Stompy the Emu" },
    { src: stompyImage6, alt: "Stompy the Emu" },
  ],
  tico: [
    {
      src: ticoImage1,
      alt: "Tico the Blue and Gold Macaw",
      position: "50% 0%",
    },
    { src: ticoImage2, alt: "Tico the Blue and Gold Macaw", position: "0% 0%" },
    { src: ticoImage3, alt: "Tico the Blue and Gold Macaw" },
  ],
  toasterStrudel: [
    {
      src: toasterStrudelImage1,
      alt: "Toaster Strudel the Blue-tounged Skink",
      position: "25% 50%",
    },
    {
      src: toasterStrudelImage2,
      alt: "Toaster Strudel the Blue-tounged Skink",
    },
    {
      src: toasterStrudelImage3,
      alt: "Toaster Strudel the Blue-tounged Skink",
    },
    {
      src: toasterStrudelImage4,
      alt: "Toaster Strudel the Blue-tounged Skink",
    },
    {
      src: toasterStrudelImage5,
      alt: "Toaster Strudel the Blue-tounged Skink",
    },
  ],
  tortellini: [
    { src: tortelliniImage1, alt: "Tortellini the Emperor Scorpion" },
    { src: tortelliniImage2, alt: "Tortellini the Emperor Scorpion" },
  ],
  winnieTheMoo: [
    { src: winnieTheMooImage1, alt: "Winnie the Red Angus Beef Cow" },
    { src: winnieTheMooImage2, alt: "Winnie the Red Angus Beef Cow" },
    {
      src: winnieTheMooImage3,
      alt: "Winnie the Red Angus Beef Cow",
      position: "50% 100%",
    },
    { src: winnieTheMooImage4, alt: "Winnie the Red Angus Beef Cow" },
    { src: winnieTheMooImage5, alt: "Winnie the Red Angus Beef Cow" },
    {
      src: winnieTheMooImage6,
      alt: "Winnie the Red Angus Beef Cow",
      position: "100% 0%",
    },
    {
      src: winnieTheMooImage7,
      alt: "Winnie the Red Angus Beef Cow",
      position: "75% 0%",
    },
  ],
};

export const ambassadorMerchImages: {
  [key in AmbassadorWithPlushKey<Ambassadors>]: AmbassadorImage;
} = {
  georgie: { src: georgieImageMerch, alt: "" },
  siren: { src: sirenImageMerch, alt: "" },
  stompy: { src: stompyImageMerch, alt: "" },
  winnieTheMoo: { src: winnieTheMooImageMerch, alt: "" },
};

export const getAmbassadorImages = ((ambassador: AmbassadorKey | string) => {
  if (!isAmbassadorKey(ambassador)) return undefined;

  return ambassadorImages[ambassador];
}) as ((ambassador: AmbassadorKey) => AmbassadorImages) &
  ((ambassador: string) => AmbassadorImages | undefined);

export const getAmbassadorMerchImage = ((
  ambassador: AmbassadorWithPlushKey<Ambassadors> | string,
) => {
  if (!isAmbassadorWithPlushKey<Ambassadors>(ambassador)) return undefined;

  return ambassadorMerchImages[ambassador];
}) as ((ambassador: AmbassadorWithPlushKey<Ambassadors>) => AmbassadorImage) &
  ((ambassador: string) => AmbassadorImage | undefined);
