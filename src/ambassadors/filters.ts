import ambassadors, { type Ambassador } from "./core";

type AmbassadorsData = Record<string, Ambassador>;

// Plush

export type AmbassadorWithPlush<Base extends Ambassador> = Base & {
  plush: Exclude<Base["plush"], null>;
};

export type AmbassadorWithPlushKey<Items extends AmbassadorsData> = {
  [K in keyof Items]: Items[K] extends AmbassadorWithPlush<Items[K]>
    ? K
    : never;
}[keyof Items];

export type AmbassadorsWithPlush<Items extends AmbassadorsData> = {
  [K in AmbassadorWithPlushKey<Items>]: Items[K] extends AmbassadorWithPlush<
    Items[K]
  >
    ? AmbassadorWithPlush<Items[K]>
    : never;
};

export const isAmbassadorWithPlushKey = <Items extends AmbassadorsData>(
  key: string | number | symbol
): key is AmbassadorWithPlushKey<Items> =>
  ambassadors[key as keyof typeof ambassadors].plush !== null;

export const isAmbassadorWithPlush = <Items extends AmbassadorsData>(
  ambassador: Items[keyof Items]
): ambassador is AmbassadorWithPlush<Items[keyof Items]> =>
  ambassador.plush !== null;

// Active

export type ActiveAmbassador<Base extends Ambassador> = Base & {
  retired: null;
};

export type ActiveAmbassadorKey<Items extends AmbassadorsData> = {
  [K in keyof Items]: Items[K] extends ActiveAmbassador<Items[K]> ? K : never;
}[keyof Items];

export type ActiveAmbassadors<Items extends AmbassadorsData> = {
  [K in ActiveAmbassadorKey<Items>]: Items[K] extends ActiveAmbassador<Items[K]>
    ? ActiveAmbassador<Items[K]>
    : never;
};

export const isActiveAmbassadorKey = <Items extends AmbassadorsData>(
  key: string | number | symbol
): key is ActiveAmbassadorKey<Items> =>
  ambassadors[key as keyof typeof ambassadors].retired === null;

export const isActiveAmbassador = <Items extends AmbassadorsData>(
  ambassador: Items[keyof Items]
): ambassador is ActiveAmbassador<Items[keyof Items]> =>
  ambassador.retired === null;
