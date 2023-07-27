import ambassadors, { type Ambassador } from "./core";

type AmbassadorsData = Record<string, Ambassador>;

// Plush

export type AmbassadorWithPlush<Base extends Ambassador = Ambassador> = Base & {
  plush: Exclude<Base["plush"], null>;
};

export type AmbassadorWithPlushKey<
  Items extends AmbassadorsData = typeof ambassadors,
> = {
  [K in keyof Items]: Items[K] extends AmbassadorWithPlush<Items[K]>
    ? K
    : never;
}[Extract<keyof Items, string>];

export type AmbassadorsWithPlush<
  Items extends AmbassadorsData = typeof ambassadors,
> = {
  [K in AmbassadorWithPlushKey<Items>]: Items[K] extends AmbassadorWithPlush<
    Items[K]
  >
    ? AmbassadorWithPlush<Items[K]>
    : never;
};

export const isAmbassadorWithPlushKey = <
  Items extends AmbassadorsData = typeof ambassadors,
>(
  key: string,
): key is AmbassadorWithPlushKey<Items> =>
  key in ambassadors &&
  ambassadors[key as keyof typeof ambassadors].plush !== null;

export const isAmbassadorWithPlush = <
  Items extends AmbassadorsData = typeof ambassadors,
>(
  ambassador: Items[keyof Items],
): ambassador is AmbassadorWithPlush<Items[keyof Items]> =>
  ambassador.plush !== null;

export const isAmbassadorWithPlushEntry = <
  Items extends AmbassadorsData = typeof ambassadors,
>(
  entry: [string, Items[keyof Items]],
): entry is [
  AmbassadorWithPlushKey<Items>,
  AmbassadorWithPlush<Items[keyof Items]>,
] =>
  isAmbassadorWithPlushKey<Items>(entry[0]) &&
  isAmbassadorWithPlush<Items>(entry[1]);

// Active

export type ActiveAmbassador<Base extends Ambassador = Ambassador> = Base & {
  retired: null;
};

export type ActiveAmbassadorKey<
  Items extends AmbassadorsData = typeof ambassadors,
> = {
  [K in keyof Items]: Items[K] extends ActiveAmbassador<Items[K]> ? K : never;
}[Extract<keyof Items, string>];

export type ActiveAmbassadors<
  Items extends AmbassadorsData = typeof ambassadors,
> = {
  [K in ActiveAmbassadorKey<Items>]: Items[K] extends ActiveAmbassador<Items[K]>
    ? ActiveAmbassador<Items[K]>
    : never;
};

export const isActiveAmbassadorKey = <
  Items extends AmbassadorsData = typeof ambassadors,
>(
  key: string,
): key is ActiveAmbassadorKey<Items> =>
  key in ambassadors &&
  ambassadors[key as keyof typeof ambassadors].retired === null;

export const isActiveAmbassador = <
  Items extends AmbassadorsData = typeof ambassadors,
>(
  ambassador: Items[keyof Items],
): ambassador is ActiveAmbassador<Items[keyof Items]> =>
  ambassador.retired === null;

export const isActiveAmbassadorEntry = <
  Items extends AmbassadorsData = typeof ambassadors,
>(
  entry: [string, Items[keyof Items]],
): entry is [
  ActiveAmbassadorKey<Items>,
  ActiveAmbassador<Items[keyof Items]>,
] =>
  isActiveAmbassadorKey<Items>(entry[0]) && isActiveAmbassador<Items>(entry[1]);
