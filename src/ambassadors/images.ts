import { z } from "zod";

import { isAmbassadorKey, type Ambassadors, type AmbassadorKey } from "./core";
import {
  isAmbassadorWithPlushKey,
  type AmbassadorWithPlushKey,
} from "./filters";

import abbottImage1 from "../assets/ambassadors/abbott/01.jpg";
import abbottImage2 from "../assets/ambassadors/abbott/02.jpg";
import abbottImage3 from "../assets/ambassadors/abbott/03.png";
import abbottImageIcon from "../assets/ambassadors/abbott/icon.png";
import abbottImageEmote from "../assets/ambassadors/abbott/emote.png";

import akelaImage1 from "../assets/ambassadors/akela/01.jpg";
import akelaImage2 from "../assets/ambassadors/akela/02.jpg";
import akelaImage3 from "../assets/ambassadors/akela/03.png";
import akelaImage4 from "../assets/ambassadors/akela/04.png";
import akelaImageIcon from "../assets/ambassadors/akela/icon.png";
import akelaImageBadge from "../assets/ambassadors/akela/badge.png";

import appaImage1 from "../assets/ambassadors/appa/01.jpg";
import appaImage2 from "../assets/ambassadors/appa/02.jpg";
import appaImage3 from "../assets/ambassadors/appa/03.jpg";
import appaImage4 from "../assets/ambassadors/appa/04.jpg";
import appaImageIcon from "../assets/ambassadors/appa/icon.png";
import appaImageEmote from "../assets/ambassadors/appa/emote.png";
import appaImageBadge from "../assets/ambassadors/appa/badge.png";

import awaImage1 from "../assets/ambassadors/awa/01.jpg";
import awaImage2 from "../assets/ambassadors/awa/02.jpg";
import awaImageIcon from "../assets/ambassadors/awa/icon.png";
import awaImageEmote from "../assets/ambassadors/awa/emote.png";
import awaImageBadge from "../assets/ambassadors/awa/badge.png";

import barbaraBakedBeanImage1 from "../assets/ambassadors/barbaraBakedBean/01.jpg";
import barbaraBakedBeanImage2 from "../assets/ambassadors/barbaraBakedBean/02.jpg";
import barbaraBakedBeanImage3 from "../assets/ambassadors/barbaraBakedBean/03.jpg";
import barbaraBakedBeanImageIcon from "../assets/ambassadors/barbaraBakedBean/icon.png";
import barbaraBakedBeanImageEmote from "../assets/ambassadors/barbaraBakedBean/emote.png";

import bbImage1 from "../assets/ambassadors/bb/01.jpg";
import bbImage2 from "../assets/ambassadors/bb/02.jpg";
import bbImage3 from "../assets/ambassadors/bb/03.jpg";
import bbImage4 from "../assets/ambassadors/bb/04.jpg";
import bbImageIcon from "../assets/ambassadors/bb/icon.png";
import bbImageEmote from "../assets/ambassadors/bb/emote.png";
import bbImageBadge from "../assets/ambassadors/bb/badge.png";

import bettyImage1 from "../assets/ambassadors/betty/01.jpg";
import bettyImageEmote from "../assets/ambassadors/betty/emote.png";

import buttImage1 from "../assets/ambassadors/butt/01.jpg";
import buttImage2 from "../assets/ambassadors/butt/02.jpg";
import buttImage3 from "../assets/ambassadors/butt/03.jpg";

import chipsAhoyImage1 from "../assets/ambassadors/chipsAhoy/01.jpg";
import chipsAhoyImage2 from "../assets/ambassadors/chipsAhoy/02.jpg";
import chipsAhoyImageIcon from "../assets/ambassadors/chipsAhoy/icon.png";
import chipsAhoyImageEmote from "../assets/ambassadors/chipsAhoy/emote.png";

import coconutImage1 from "../assets/ambassadors/coconut/01.png";
import coconutImage2 from "../assets/ambassadors/coconut/02.jpg";
import coconutImageIcon from "../assets/ambassadors/coconut/icon.png";
import coconutImageEmote from "../assets/ambassadors/coconut/emote.png";

import deweyImage1 from "../assets/ambassadors/dewey/01.jpg";
import deweyImage2 from "../assets/ambassadors/dewey/02.jpg";
import deweyImage3 from "../assets/ambassadors/dewey/03.jpg";

import drewImage1 from "../assets/ambassadors/drew/01.jpg";
import drewImage2 from "../assets/ambassadors/drew/02.jpg";

import duckyImage1 from "../assets/ambassadors/ducky/01.jpg";
import duckyImage2 from "../assets/ambassadors/ducky/02.jpg";
import duckyImageIcon from "../assets/ambassadors/ducky/icon.png";
import duckyImageEmote from "../assets/ambassadors/ducky/emote.png";

import evaImage1 from "../assets/ambassadors/eva/01.jpg";
import evaImage2 from "../assets/ambassadors/eva/02.jpg";
import evaImage3 from "../assets/ambassadors/eva/03.jpg";
import evaImage4 from "../assets/ambassadors/eva/04.jpg";

import fennImage1 from "../assets/ambassadors/fenn/01.jpg";
import fennImage2 from "../assets/ambassadors/fenn/02.jpg";
import fennImage3 from "../assets/ambassadors/fenn/03.jpg";
import fennImage4 from "../assets/ambassadors/fenn/04.jpg";
import fennImage5 from "../assets/ambassadors/fenn/05.jpg";
import fennImageIcon from "../assets/ambassadors/fenn/icon.png";
import fennImageEmote from "../assets/ambassadors/fenn/emote.png";

import georgieImage1 from "../assets/ambassadors/georgie/01.jpg";
import georgieImage2 from "../assets/ambassadors/georgie/02.jpg";
import georgieImage3 from "../assets/ambassadors/georgie/03.jpg";
import georgieImage4 from "../assets/ambassadors/georgie/04.png";
import georgieImage5 from "../assets/ambassadors/georgie/05.jpg";
import georgieImageMerch from "../assets/ambassadors/georgie/merch.jpg";
import georgieImageIcon from "../assets/ambassadors/georgie/icon.png";
import georgieImageBadge from "../assets/ambassadors/georgie/badge.png";

import hankMrMctrainImage1 from "../assets/ambassadors/hankMrMctrain/01.jpg";
import hankMrMctrainImage2 from "../assets/ambassadors/hankMrMctrain/02.jpg";
import hankMrMctrainImage3 from "../assets/ambassadors/hankMrMctrain/03.jpg";
import hankMrMctrainImage4 from "../assets/ambassadors/hankMrMctrain/04.jpg";
import hankMrMctrainImageIcon from "../assets/ambassadors/hankMrMctrain/icon.png";
import hankMrMctrainImageEmote from "../assets/ambassadors/hankMrMctrain/emote.png";

import henriettaImage1 from "../assets/ambassadors/henrietta/01.jpg";
import henriettaImageIcon from "../assets/ambassadors/henrietta/icon.png";
import henriettaImageEmote from "../assets/ambassadors/henrietta/emote.png";

import henriqueImage1 from "../assets/ambassadors/henrique/01.jpg";
import henriqueImage2 from "../assets/ambassadors/henrique/02.jpg";
import henriqueImage3 from "../assets/ambassadors/henrique/03.jpg";
import henriqueImageIcon from "../assets/ambassadors/henrique/icon.png";
import henriqueImageEmote from "../assets/ambassadors/henrique/emote.png";
import henriqueImageBadge from "../assets/ambassadors/henrique/badge.png";

import jalapenoImage1 from "../assets/ambassadors/jalapeno/01.jpg";
import jalapenoImage2 from "../assets/ambassadors/jalapeno/02.jpg";
import jalapenoImage3 from "../assets/ambassadors/jalapeno/03.jpg";
import jalapenoImage4 from "../assets/ambassadors/jalapeno/04.png";
import jalapenoImage5 from "../assets/ambassadors/jalapeno/05.jpg";
import jalapenoImageIcon from "../assets/ambassadors/jalapeno/icon.png";
import jalapenoImageEmote from "../assets/ambassadors/jalapeno/emote.png";
import jalapenoImageBadge from "../assets/ambassadors/jalapeno/badge.png";

import kiwiImage1 from "../assets/ambassadors/kiwi/01.jpg";
import kiwiImage2 from "../assets/ambassadors/kiwi/02.jpg";
import kiwiImage3 from "../assets/ambassadors/kiwi/03.jpg";
import kiwiImage4 from "../assets/ambassadors/kiwi/04.jpg";

import martyImage1 from "../assets/ambassadors/marty/01.jpg";
import martyImage2 from "../assets/ambassadors/marty/02.jpg";
import martyImage3 from "../assets/ambassadors/marty/03.jpg";
import martyImageIcon from "../assets/ambassadors/marty/icon.png";
import martyImageEmote from "../assets/ambassadors/marty/emote.png";

import martyMcflyImage1 from "../assets/ambassadors/martyMcfly/01.jpg";
import martyMcflyImage2 from "../assets/ambassadors/martyMcfly/02.jpg";
import martyMcflyImage3 from "../assets/ambassadors/martyMcfly/03.jpg";
import martyMcflyImageBadge from "../assets/ambassadors/martyMcfly/badge.png";

import miaImage1 from "../assets/ambassadors/mia/01.jpg";
import miaImage2 from "../assets/ambassadors/mia/02.jpg";
import miaImage3 from "../assets/ambassadors/mia/03.jpg";
import miaImage4 from "../assets/ambassadors/mia/04.jpg";
import miaImage5 from "../assets/ambassadors/mia/05.jpg";
import miaImageIcon from "../assets/ambassadors/mia/icon.png";
import miaImageEmote from "../assets/ambassadors/mia/emote.png";

import mileyImage1 from "../assets/ambassadors/miley/01.jpg";
import mileyImage2 from "../assets/ambassadors/miley/02.jpg";
import mileyImage3 from "../assets/ambassadors/miley/03.jpg";
import mileyImage4 from "../assets/ambassadors/miley/04.jpg";
import mileyImageIcon from "../assets/ambassadors/miley/icon.png";
import mileyImageEmote from "../assets/ambassadors/miley/emote.png";

import momoImage1 from "../assets/ambassadors/momo/01.jpg";
import momoImage2 from "../assets/ambassadors/momo/02.jpg";
import momoImage3 from "../assets/ambassadors/momo/03.jpg";
import momoImageIcon from "../assets/ambassadors/momo/icon.png";
import momoImageEmote from "../assets/ambassadors/momo/emote.png";

import moominImage1 from "../assets/ambassadors/moomin/01.jpg";
import moominImage2 from "../assets/ambassadors/moomin/02.jpg";
import moominImageIcon from "../assets/ambassadors/moomin/icon.png";
import moominImageEmote from "../assets/ambassadors/moomin/emote.png";

import nillaWaferImage1 from "../assets/ambassadors/nillaWafer/01.jpg";
import nillaWaferImage2 from "../assets/ambassadors/nillaWafer/02.jpg";
import nillaWaferImageIcon from "../assets/ambassadors/nillaWafer/icon.png";
import nillaWaferImageEmote from "../assets/ambassadors/nillaWafer/emote.png";

import nolieImage1 from "../assets/ambassadors/nolie/01.jpg";
import nolieImage2 from "../assets/ambassadors/nolie/02.jpg";
import nolieImage3 from "../assets/ambassadors/nolie/03.jpg";

import noodleImage1 from "../assets/ambassadors/noodle/01.jpg";
import noodleImage2 from "../assets/ambassadors/noodle/02.jpg";
import noodleImage3 from "../assets/ambassadors/noodle/03.jpg";
import noodleImage4 from "../assets/ambassadors/noodle/04.jpg";
import noodleImageIcon from "../assets/ambassadors/noodle/icon.png";

import nuggetImage1 from "../assets/ambassadors/nugget/01.jpg";
import nuggetImage2 from "../assets/ambassadors/nugget/02.jpg";
import nuggetImage3 from "../assets/ambassadors/nugget/03.jpg";
import nuggetImageIcon from "../assets/ambassadors/nugget/icon.png";
import nuggetImageEmote from "../assets/ambassadors/nugget/emote.png";

import oliverImage1 from "../assets/ambassadors/oliver/01.jpg";
import oliverImage2 from "../assets/ambassadors/oliver/02.jpg";
import oliverImage3 from "../assets/ambassadors/oliver/03.jpg";
import oliverImageIcon from "../assets/ambassadors/oliver/icon.png";
import oliverImageEmote from "../assets/ambassadors/oliver/emote.png";

import orionImage1 from "../assets/ambassadors/orion/01.jpg";
import orionImageIcon from "../assets/ambassadors/orion/icon.png";

import patchyImage1 from "../assets/ambassadors/patchy/01.png";
import patchyImage2 from "../assets/ambassadors/patchy/02.jpg";
import patchyImageIcon from "../assets/ambassadors/patchy/icon.png";
import patchyImageEmote from "../assets/ambassadors/patchy/emote.png";

import picklesImage1 from "../assets/ambassadors/pickles/01.jpg";
import picklesImageIcon from "../assets/ambassadors/pickles/icon.png";
import picklesImageEmote from "../assets/ambassadors/pickles/emote.png";

import pitchJarsImage1 from "../assets/ambassadors/pitchJars/01.jpg";
import pitchJarsImage2 from "../assets/ambassadors/pitchJars/02.jpg";

import pollyImage1 from "../assets/ambassadors/polly/01.jpg";
import pollyImageIcon from "../assets/ambassadors/polly/icon.png";
import pollyImageEmote from "../assets/ambassadors/polly/emote.png";

import puppyImage1 from "../assets/ambassadors/puppy/01.jpg";
import puppyImage2 from "../assets/ambassadors/puppy/02.jpg";
import puppyImage3 from "../assets/ambassadors/puppy/03.jpg";
import puppyImageIcon from "../assets/ambassadors/puppy/icon.png";
import puppyImageEmote from "../assets/ambassadors/puppy/emote.png";
import puppyImageBadge from "../assets/ambassadors/puppy/badge.png";

import pushPopImage1 from "../assets/ambassadors/pushPop/01.jpg";
import pushPopImage2 from "../assets/ambassadors/pushPop/02.jpg";
import pushPopImage3 from "../assets/ambassadors/pushPop/03.jpg";
import pushPopImage4 from "../assets/ambassadors/pushPop/04.jpg";
import pushPopImageIcon from "../assets/ambassadors/pushPop/icon.png";
import pushPopImageEmote from "../assets/ambassadors/pushPop/emote.png";
import pushPopImageBadge from "../assets/ambassadors/pushPop/badge.png";

import reedImage1 from "../assets/ambassadors/reed/01.jpg";
import reedImage2 from "../assets/ambassadors/reed/02.jpg";
import reedImage3 from "../assets/ambassadors/reed/03.jpg";
import reedImage4 from "../assets/ambassadors/reed/04.jpg";
import reedImage5 from "../assets/ambassadors/reed/05.jpg";
import reedImageIcon from "../assets/ambassadors/reed/icon.png";
import reedImageEmote from "../assets/ambassadors/reed/emote.png";
import reedImageBadge from "../assets/ambassadors/reed/badge.png";

import serranoImage1 from "../assets/ambassadors/serrano/01.jpg";
import serranoImage2 from "../assets/ambassadors/serrano/02.jpg";
import serranoImage3 from "../assets/ambassadors/serrano/03.jpg";
import serranoImage4 from "../assets/ambassadors/serrano/04.jpg";
import serranoImageIcon from "../assets/ambassadors/serrano/icon.png";
import serranoImageEmote from "../assets/ambassadors/serrano/emote.png";

import sirenImage1 from "../assets/ambassadors/siren/01.jpg";
import sirenImage2 from "../assets/ambassadors/siren/02.jpg";
import sirenImage3 from "../assets/ambassadors/siren/03.jpg";
import sirenImageMerch from "../assets/ambassadors/siren/merch.png";
import sirenImageIcon from "../assets/ambassadors/siren/icon.png";
import sirenImageEmote from "../assets/ambassadors/siren/emote.png";
import sirenImageBadge from "../assets/ambassadors/siren/badge.png";

import snorkImage1 from "../assets/ambassadors/snork/01.jpg";
import snorkImage2 from "../assets/ambassadors/snork/02.jpg";
import snorkImageIcon from "../assets/ambassadors/snork/icon.png";
import snorkImageEmote from "../assets/ambassadors/snork/emote.png";

import stinkyImage1 from "../assets/ambassadors/stinky/01.jpg";

import stompyImage1 from "../assets/ambassadors/stompy/01.jpg";
import stompyImage2 from "../assets/ambassadors/stompy/02.jpg";
import stompyImage3 from "../assets/ambassadors/stompy/03.jpg";
import stompyImage4 from "../assets/ambassadors/stompy/04.jpg";
import stompyImage5 from "../assets/ambassadors/stompy/05.jpg";
import stompyImage6 from "../assets/ambassadors/stompy/06.jpg";
import stompyImageMerch from "../assets/ambassadors/stompy/merch.jpg";
import stompyImageIcon from "../assets/ambassadors/stompy/icon.png";
import stompyImageEmote from "../assets/ambassadors/stompy/emote.png";
import stompyImageBadge from "../assets/ambassadors/stompy/badge.png";

import ticoImage1 from "../assets/ambassadors/tico/01.jpg";
import ticoImage2 from "../assets/ambassadors/tico/02.jpg";
import ticoImage3 from "../assets/ambassadors/tico/03.jpg";
import ticoImageIcon from "../assets/ambassadors/tico/icon.png";
import ticoImageEmote from "../assets/ambassadors/tico/emote.png";
import ticoImageBadge from "../assets/ambassadors/tico/badge.png";

import timberImage1 from "../assets/ambassadors/timber/01.jpg";
import timberImage2 from "../assets/ambassadors/timber/02.jpg";
import timberImage3 from "../assets/ambassadors/timber/03.jpg";
import timberImageIcon from "../assets/ambassadors/timber/icon.png";
import timberImageEmote from "../assets/ambassadors/timber/emote.png";

import toasterStrudelImage1 from "../assets/ambassadors/toasterStrudel/01.jpg";
import toasterStrudelImage2 from "../assets/ambassadors/toasterStrudel/02.jpg";
import toasterStrudelImage3 from "../assets/ambassadors/toasterStrudel/03.jpg";
import toasterStrudelImage4 from "../assets/ambassadors/toasterStrudel/04.jpg";
import toasterStrudelImage5 from "../assets/ambassadors/toasterStrudel/05.jpg";
import toasterStrudelImageIcon from "../assets/ambassadors/toasterStrudel/icon.png";
import toasterStrudelImageEmote from "../assets/ambassadors/toasterStrudel/emote.png";
import toasterStrudelImageBadge from "../assets/ambassadors/toasterStrudel/badge.png";

import tortelliniImage1 from "../assets/ambassadors/tortellini/01.jpg";
import tortelliniImage2 from "../assets/ambassadors/tortellini/02.jpg";
import tortelliniImage3 from "../assets/ambassadors/tortellini/03.jpg";
import tortelliniImage4 from "../assets/ambassadors/tortellini/04.jpg";
import tortelliniImageIcon from "../assets/ambassadors/tortellini/icon.png";
import tortelliniImageEmote from "../assets/ambassadors/tortellini/emote.png";

import winnieTheMooImage1 from "../assets/ambassadors/winnieTheMoo/01.jpg";
import winnieTheMooImage2 from "../assets/ambassadors/winnieTheMoo/02.jpg";
import winnieTheMooImage3 from "../assets/ambassadors/winnieTheMoo/03.jpg";
import winnieTheMooImage4 from "../assets/ambassadors/winnieTheMoo/04.jpg";
import winnieTheMooImage5 from "../assets/ambassadors/winnieTheMoo/05.jpg";
import winnieTheMooImage6 from "../assets/ambassadors/winnieTheMoo/06.jpg";
import winnieTheMooImage7 from "../assets/ambassadors/winnieTheMoo/07.jpg";
import winnieTheMooImageMerch from "../assets/ambassadors/winnieTheMoo/merch.png";
import winnieTheMooImageIcon from "../assets/ambassadors/winnieTheMoo/icon.png";
import winnieTheMooImageEmote from "../assets/ambassadors/winnieTheMoo/emote.png";
import winnieTheMooImageBadge from "../assets/ambassadors/winnieTheMoo/badge.png";

type OneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type ZeroToNine = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Percentage = `${ZeroToNine}%` | `${OneToNine}${ZeroToNine}%` | "100%";
type Position = `${Percentage} ${Percentage}`;

const isPercentage = (str: string): str is Percentage =>
  /^(100|[1-9]?[0-9])%$/.test(str);
const isPosition = (str: string): str is Position => {
  const [x, y, ...rest] = str.split(" ");
  return rest.length === 0 && !!x && !!y && isPercentage(x) && isPercentage(y);
};

type ImagePng = (typeof import("*.png"))["default"];
type ImageJpg = (typeof import("*.jpg"))["default"];
type ImageJpeg = (typeof import("*.jpeg"))["default"];
type ImageImport = ImagePng | ImageJpg | ImageJpeg;

// Manually set the type of the schema to avoid TS inferring `ImageImport` and `Position`
// We want `ImageImport` to retain its original type using `import` calls
// And we want `Position` to not be expanded into a massive union literal type
type ZodImageObject = z.ZodObject<{
  src: z.ZodType<ImageImport>;
  alt: z.ZodString;
  position: z.ZodOptional<z.ZodCustom<Position>>;
}>;

const isPositionSchema = z.custom<Position>(
  (val) => typeof val === "string" && isPosition(val),
  "must be a valid position string with two percentage values",
);

export const ambassadorImageSchema: ZodImageObject = z.object({
  src: z.custom<ImageImport>(),
  alt: z.string(),
  position: isPositionSchema.optional(),
});

export type AmbassadorImage = z.infer<typeof ambassadorImageSchema>;
export type AmbassadorImages = [AmbassadorImage, ...AmbassadorImage[]];

const ambassadorImages: {
  [key in AmbassadorKey]: AmbassadorImages;
} = {
  abbott: [
    { src: abbottImage1, alt: "Abbott the American Crow" },
    { src: abbottImage2, alt: "Abbott the American Crow" },
    { src: abbottImage3, alt: "Abbott the American Crow", position: "0% 0%" },
  ],
  akela: [
    { src: akelaImage1, alt: "Akela the Wolfdog", position: "50% 35%" },
    { src: akelaImage2, alt: "Akela the Wolfdog", position: "25% 25%" },
    { src: akelaImage3, alt: "Akela the Wolfdog" },
    { src: akelaImage4, alt: "Akela the Wolfdog" },
  ],
  appa: [
    { src: appaImage1, alt: "Appa the Common Marmoset", position: "50% 25%" },
    { src: appaImage2, alt: "Appa the Common Marmoset", position: "50% 0%" },
    { src: appaImage3, alt: "Appa the Common Marmoset" },
    { src: appaImage4, alt: "Appa the Common Marmoset" },
  ],
  awa: [
    { src: awaImage1, alt: "Awa the Wolfdog", position: "50% 25%" },
    { src: awaImage2, alt: "Awa the Wolfdog", position: "0% 0%" },
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
    { src: bbImage3, alt: "BB the Spanish Orange Isopods" },
    { src: bbImage4, alt: "BB the Spanish Orange Isopods" },
  ],
  betty: [
    { src: bettyImage1, alt: "Betty the Cochin Chicken", position: "50% 0%" },
  ],
  butt: [
    { src: buttImage1, alt: "Butt the Mexican Butterwort Plant" },
    { src: buttImage2, alt: "Butt the Mexican Butterwort Plant" },
    { src: buttImage3, alt: "Butt the Mexican Butterwort Plant" },
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
  dewey: [
    { src: deweyImage1, alt: "Dewey the Fork-Leaved Sundew Plant" },
    { src: deweyImage2, alt: "Dewey the Fork-Leaved Sundew Plant" },
    { src: deweyImage3, alt: "Dewey the Fork-Leaved Sundew Plant" },
  ],
  drew: [
    { src: drewImage1, alt: "Drew the Flask-Shaped Pitcher-Plant" },
    { src: drewImage2, alt: "Drew the Flask-Shaped Pitcher-Plant" },
  ],
  ducky: [
    { src: duckyImage1, alt: "Ducky the Rubber Ducky Isopods" },
    { src: duckyImage2, alt: "Ducky the Rubber Ducky Isopods" },
  ],
  eva: [
    { src: evaImage1, alt: "Eva the Mexican Red Rump Tarantula" },
    { src: evaImage2, alt: "Eva the Mexican Red Rump Tarantula" },
    { src: evaImage3, alt: "Eva the Mexican Red Rump Tarantula" },
    { src: evaImage4, alt: "Eva the Mexican Red Rump Tarantula" },
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
    { src: hankMrMctrainImage3, alt: "Hank the Smokey Ghost Millipede" },
    {
      src: hankMrMctrainImage4,
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
  kiwi: [
    { src: kiwiImage1, alt: "Kiwi the Honduran Curly Hair Tarantula" },
    { src: kiwiImage2, alt: "Kiwi the Honduran Curly Hair Tarantula" },
    { src: kiwiImage3, alt: "Kiwi the Honduran Curly Hair Tarantula" },
    { src: kiwiImage4, alt: "Kiwi the Honduran Curly Hair Tarantula" },
  ],
  marty: [
    { src: martyImage1, alt: "Marty the Zebra Isopods", position: "50% 100%" },
    { src: martyImage2, alt: "Marty the Zebra Isopods" },
    { src: martyImage3, alt: "Marty the Zebra Isopods" },
  ],
  martyMcfly: [
    { src: martyMcflyImage1, alt: "Marty McFly the Venus Flytrap Plant" },
    { src: martyMcflyImage2, alt: "Marty McFly the Venus Flytrap Plant" },
    { src: martyMcflyImage3, alt: "Marty McFly the Venus Flytrap Plant" },
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
    {
      src: momoImage2,
      alt: "Momo the Black Tufted Marmoset",
      position: "25% 50%",
    },
    {
      src: momoImage3,
      alt: "Momo the Black Tufted Marmoset",
      position: "0% 50%",
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
  nolie: [
    { src: nolieImage1, alt: "Nolie the Emu", position: "90% 10%" },
    { src: nolieImage2, alt: "Nolie the Emu", position: "0% 25%" },
    { src: nolieImage3, alt: "Nolie the Emu", position: "90% 10%" },
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
  pitchjars: [
    { src: pitchJarsImage1, alt: "PitchJars the Veitch's Pitcher-Plant" },
    { src: pitchJarsImage2, alt: "PitchJars the Veitch's Pitcher-Plant" },
  ],
  polly: [{ src: pollyImage1, alt: "Polly the Silkie Chicken" }],
  puppy: [
    { src: puppyImage1, alt: "Puppy the Emperor Scorpion" },
    { src: puppyImage2, alt: "Puppy the Emperor Scorpion" },
    { src: puppyImage3, alt: "Puppy the Emperor Scorpion" },
  ],
  pushPop: [
    { src: pushPopImage1, alt: "Push Pop the Sulcata Tortoise" },
    { src: pushPopImage2, alt: "Push Pop the Sulcata Tortoise" },
    { src: pushPopImage3, alt: "Push Pop the Sulcata Tortoise" },
    { src: pushPopImage4, alt: "Push Pop the Sulcata Tortoise" },
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
  ],
  snork: [
    { src: snorkImage1, alt: "Snork the Chinchilla", position: "0% 50%" },
    { src: snorkImage2, alt: "Snork the Chinchilla", position: "50% 0%" },
  ],
  stinky: [
    {
      src: stinkyImage1,
      alt: "Stinky the Corpse Flower Plant",
      position: "50% 75%",
    },
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
  timber: [
    { src: timberImage1, alt: "Timber the Wolfdog", position: "75% 25%" },
    { src: timberImage2, alt: "Timber the Wolfdog", position: "50% 0%" },
    { src: timberImage3, alt: "Timber the Wolfdog", position: "100% 25%" },
  ],
  toasterStrudel: [
    {
      src: toasterStrudelImage1,
      alt: "Toaster Strudel the Blue-tongued Skink",
      position: "25% 50%",
    },
    {
      src: toasterStrudelImage2,
      alt: "Toaster Strudel the Blue-tongued Skink",
    },
    {
      src: toasterStrudelImage3,
      alt: "Toaster Strudel the Blue-tongued Skink",
    },
    {
      src: toasterStrudelImage4,
      alt: "Toaster Strudel the Blue-tongued Skink",
    },
    {
      src: toasterStrudelImage5,
      alt: "Toaster Strudel the Blue-tongued Skink",
    },
  ],
  tortellini: [
    { src: tortelliniImage1, alt: "Tortellini the Emperor Scorpion" },
    { src: tortelliniImage2, alt: "Tortellini the Emperor Scorpion" },
    { src: tortelliniImage3, alt: "Tortellini the Emperor Scorpion" },
    { src: tortelliniImage4, alt: "Tortellini the Emperor Scorpion" },
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

export const getAmbassadorImages = ((ambassador: AmbassadorKey | string) => {
  if (!isAmbassadorKey(ambassador)) return undefined;
  return ambassadorImages[ambassador];
}) as ((ambassador: AmbassadorKey) => AmbassadorImages) &
  ((ambassador: string) => AmbassadorImages | undefined);

export const ambassadorMerchImages: {
  [key in AmbassadorWithPlushKey<Ambassadors>]: AmbassadorImage;
} = {
  georgie: { src: georgieImageMerch, alt: "" },
  siren: { src: sirenImageMerch, alt: "" },
  stompy: { src: stompyImageMerch, alt: "" },
  winnieTheMoo: { src: winnieTheMooImageMerch, alt: "" },
};

export const getAmbassadorMerchImage = ((
  ambassador: AmbassadorWithPlushKey<Ambassadors> | string,
) => {
  if (!isAmbassadorWithPlushKey<Ambassadors>(ambassador)) return undefined;
  return ambassadorMerchImages[ambassador];
}) as ((ambassador: AmbassadorWithPlushKey<Ambassadors>) => AmbassadorImage) &
  ((ambassador: string) => AmbassadorImage | undefined);

// Marked as Partial as these images are provided by a community member,
// LazyGoose, and so might not exist when adding a new ambassador.
export const ambassadorIconImages: Partial<{
  [key in AmbassadorKey]: AmbassadorImage;
}> = {
  abbott: { src: abbottImageIcon, alt: "" },
  akela: { src: akelaImageIcon, alt: "" },
  appa: { src: appaImageIcon, alt: "" },
  awa: { src: awaImageIcon, alt: "" },
  barbaraBakedBean: { src: barbaraBakedBeanImageIcon, alt: "" },
  bb: { src: bbImageIcon, alt: "" },
  chipsAhoy: { src: chipsAhoyImageIcon, alt: "" },
  coconut: { src: coconutImageIcon, alt: "" },
  ducky: { src: duckyImageIcon, alt: "" },
  fenn: { src: fennImageIcon, alt: "" },
  georgie: { src: georgieImageIcon, alt: "" },
  hankMrMctrain: { src: hankMrMctrainImageIcon, alt: "" },
  henrietta: { src: henriettaImageIcon, alt: "" },
  henrique: { src: henriqueImageIcon, alt: "" },
  jalapeno: { src: jalapenoImageIcon, alt: "" },
  marty: { src: martyImageIcon, alt: "" },
  mia: { src: miaImageIcon, alt: "" },
  miley: { src: mileyImageIcon, alt: "" },
  momo: { src: momoImageIcon, alt: "" },
  moomin: { src: moominImageIcon, alt: "" },
  nillaWafer: { src: nillaWaferImageIcon, alt: "" },
  noodle: { src: noodleImageIcon, alt: "" },
  nugget: { src: nuggetImageIcon, alt: "" },
  oliver: { src: oliverImageIcon, alt: "" },
  orion: { src: orionImageIcon, alt: "" },
  patchy: { src: patchyImageIcon, alt: "" },
  pickles: { src: picklesImageIcon, alt: "" },
  polly: { src: pollyImageIcon, alt: "" },
  puppy: { src: puppyImageIcon, alt: "" },
  pushPop: { src: pushPopImageIcon, alt: "" },
  reed: { src: reedImageIcon, alt: "" },
  serrano: { src: serranoImageIcon, alt: "" },
  siren: { src: sirenImageIcon, alt: "" },
  snork: { src: snorkImageIcon, alt: "" },
  stompy: { src: stompyImageIcon, alt: "" },
  tico: { src: ticoImageIcon, alt: "" },
  timber: { src: timberImageIcon, alt: "" },
  toasterStrudel: { src: toasterStrudelImageIcon, alt: "" },
  tortellini: { src: tortelliniImageIcon, alt: "" },
  winnieTheMoo: { src: winnieTheMooImageIcon, alt: "" },
};

export const getAmbassadorIconImage = (
  ambassador: AmbassadorKey | string,
): AmbassadorImage | undefined => {
  if (!isAmbassadorKey(ambassador)) return undefined;
  return ambassadorIconImages[ambassador];
};

// Marked as Partial as these images are from the Twitch channel
// sub emotes and are not created for every ambassador.
export const ambassadorEmoteImages: Partial<{
  [key in AmbassadorKey]: AmbassadorImage;
}> = {
  abbott: { src: abbottImageEmote, alt: "" },
  appa: { src: appaImageEmote, alt: "" },
  awa: { src: awaImageEmote, alt: "" },
  barbaraBakedBean: { src: barbaraBakedBeanImageEmote, alt: "" },
  bb: { src: bbImageEmote, alt: "" },
  betty: { src: bettyImageEmote, alt: "" },
  chipsAhoy: { src: chipsAhoyImageEmote, alt: "" },
  coconut: { src: coconutImageEmote, alt: "" },
  ducky: { src: duckyImageEmote, alt: "" },
  fenn: { src: fennImageEmote, alt: "" },
  hankMrMctrain: { src: hankMrMctrainImageEmote, alt: "" },
  henrietta: { src: henriettaImageEmote, alt: "" },
  henrique: { src: henriqueImageEmote, alt: "" },
  jalapeno: { src: jalapenoImageEmote, alt: "" },
  marty: { src: martyImageEmote, alt: "" },
  mia: { src: miaImageEmote, alt: "" },
  miley: { src: mileyImageEmote, alt: "" },
  momo: { src: momoImageEmote, alt: "" },
  moomin: { src: moominImageEmote, alt: "" },
  nillaWafer: { src: nillaWaferImageEmote, alt: "" },
  nugget: { src: nuggetImageEmote, alt: "" },
  oliver: { src: oliverImageEmote, alt: "" },
  patchy: { src: patchyImageEmote, alt: "" },
  pickles: { src: picklesImageEmote, alt: "" },
  polly: { src: pollyImageEmote, alt: "" },
  puppy: { src: puppyImageEmote, alt: "" },
  pushPop: { src: pushPopImageEmote, alt: "" },
  reed: { src: reedImageEmote, alt: "" },
  serrano: { src: serranoImageEmote, alt: "" },
  siren: { src: sirenImageEmote, alt: "" },
  snork: { src: snorkImageEmote, alt: "" },
  stompy: { src: stompyImageEmote, alt: "" },
  tico: { src: ticoImageEmote, alt: "" },
  timber: { src: timberImageEmote, alt: "" },
  toasterStrudel: { src: toasterStrudelImageEmote, alt: "" },
  tortellini: { src: tortelliniImageEmote, alt: "" },
  winnieTheMoo: { src: winnieTheMooImageEmote, alt: "" },
};

export const getAmbassadorEmoteImage = (
  ambassador: AmbassadorKey | string,
): AmbassadorImage | undefined => {
  if (!isAmbassadorKey(ambassador)) return undefined;
  return ambassadorEmoteImages[ambassador];
};

// Marked as Partial as these images are from the Twitch channel
// sub badges and are not created for every ambassador.
export const ambassadorBadgeImages: Partial<{
  [key in AmbassadorKey]: AmbassadorImage;
}> = {
  akela: { src: akelaImageBadge, alt: "" },
  appa: { src: appaImageBadge, alt: "" },
  awa: { src: awaImageBadge, alt: "" },
  bb: { src: bbImageBadge, alt: "" },
  georgie: { src: georgieImageBadge, alt: "" },
  henrique: { src: henriqueImageBadge, alt: "" },
  jalapeno: { src: jalapenoImageBadge, alt: "" },
  martyMcfly: { src: martyMcflyImageBadge, alt: "" },
  puppy: { src: puppyImageBadge, alt: "" },
  pushPop: { src: pushPopImageBadge, alt: "" },
  reed: { src: reedImageBadge, alt: "" },
  siren: { src: sirenImageBadge, alt: "" },
  stompy: { src: stompyImageBadge, alt: "" },
  tico: { src: ticoImageBadge, alt: "" },
  toasterStrudel: { src: toasterStrudelImageBadge, alt: "" },
  winnieTheMoo: { src: winnieTheMooImageBadge, alt: "" },
};

export const getAmbassadorBadgeImage = (
  ambassador: AmbassadorKey | string,
): AmbassadorImage | undefined => {
  if (!isAmbassadorKey(ambassador)) return undefined;
  return ambassadorBadgeImages[ambassador];
};
