import type { PresetsConfig } from "tailwindcss/types/config";

// Thanks https://stackoverflow.com/a/66252656
type RemoveIndex<T> = {
  [K in keyof T as string extends K
    ? never
    : number extends K
    ? never
    : symbol extends K
    ? never
    : K]: T[K];
};

type RefinedConfig = Omit<RemoveIndex<PresetsConfig>, "theme"> & {
  theme?: Omit<RemoveIndex<NonNullable<PresetsConfig["theme"]>>, "extend"> & {
    extend?: RemoveIndex<
      NonNullable<NonNullable<PresetsConfig["theme"]>["extend"]>
    >;
  };
};

const config = {
  theme: {
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      gray: {
        DEFAULT: "#44403C",
        50: "#FAFAF9",
        100: "#F5F5F4",
        200: "#E7E5E4",
        300: "#D6D3D1",
        400: "#A8A29E",
        500: "#78716C",
        600: "#57534E",
        700: "#44403C",
        800: "#292524",
        900: "#1C1917",
      },
      red: {
        DEFAULT: "#8F3B3B",
        50: "#F3E1E1",
        100: "#EDD2D2",
        200: "#E1B5B5",
        300: "#D59898",
        400: "#C97B7B",
        500: "#BD5E5E",
        600: "#AC4646",
        700: "#8F3B3B",
        800: "#682A2A",
        900: "#401A1A",
      },
      yellow: {
        DEFAULT: "#C1A033",
        50: "#FFFFFF",
        100: "#FBF8EF",
        200: "#F2EACF",
        300: "#EADCAE",
        400: "#E1CE8E",
        500: "#D8C06E",
        600: "#D0B24E",
        700: "#C1A033",
        800: "#957C28",
        900: "#69571C",
      },
      green: {
        DEFAULT: "#578F3B",
        50: "#E7F3E1",
        100: "#DBEDD2",
        200: "#C4E1B5",
        300: "#ACD598",
        400: "#95C97B",
        500: "#7EBD5E",
        600: "#68AC46",
        700: "#578F3B",
        800: "#3F682A",
        900: "#27401A",
      },
      blue: {
        DEFAULT: "#3B5A8F",
        50: "#E1E7F3",
        100: "#D2DCED",
        200: "#B5C5E1",
        300: "#98AED5",
        400: "#7B98C9",
        500: "#5E81BD",
        600: "#466CAC",
        700: "#3B5A8F",
        800: "#2A4168",
        900: "#1A2840",
      },
      pink: {
        DEFAULT: "#EC4899",
        50: "#FDEEF6",
        100: "#FBDCEB",
        200: "#F8B7D7",
        300: "#F492C2",
        400: "#F06DAE",
        500: "#EC4899",
        600: "#E4187D",
        700: "#B11261",
        800: "#7F0D45",
        900: "#4C0829",
      },
      "alveus-tan": {
        DEFAULT: "#FAEEE6",
        50: "#FDFAF7",
        100: "#FAEEE6",
        200: "#F1CEB7",
        300: "#E7AE88",
        400: "#DE8F5A",
        500: "#D56F2B",
        600: "#A65621",
        700: "#773E18",
        800: "#49260F",
        900: "#1A0E05",
      },
      "alveus-green": {
        DEFAULT: "#636A60",
        50: "#E9EBE9",
        100: "#DFE1DE",
        200: "#CACEC8",
        300: "#B5BAB3",
        400: "#A0A79E",
        500: "#8C9388",
        600: "#777F73",
        700: "#636A60",
        800: "#484D45",
        900: "#2C2F2B",
      },
      fall: "#834A26",
      carnival: {
        DEFAULT: "#4E1362",
        700: "#390E47",
        800: "#28122F",
      },
      twitch: "#6441A5",
      highlight: "#FF9F1C",
    },
    extend: {
      gridTemplateColumns: {
        ...Object.fromEntries(
          Array.from({ length: 12 }, (_, i) => [
            `${i + 1}-auto`,
            `repeat(${i + 1}, auto)`,
          ]),
        ),
      },
      gridTemplateRows: {
        ...Object.fromEntries(
          Array.from({ length: 12 }, (_, i) => [
            `${i + 1}-auto`,
            `repeat(${i + 1}, auto)`,
          ]),
        ),
      },
    },
  },
} satisfies RefinedConfig;

export default config;
