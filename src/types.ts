type OneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type ZeroToNine = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type DateStringYear =
  | `19${ZeroToNine}${ZeroToNine}`
  | `20${ZeroToNine}${ZeroToNine}`;
type DateStringMonth = `0${OneToNine}` | `1${0 | 1 | 2}`;
type DateStringYearMonth = `${DateStringYear}-${DateStringMonth}`;
type DateStringDay = `${0}${OneToNine}` | `${1 | 2}${ZeroToNine}` | `3${0 | 1}`;
type DateString = `${DateStringYearMonth}-${DateStringDay}`;
export type PartialDateString =
  | DateStringYear
  | DateStringYearMonth
  | DateString;

export type Nullable<T> = T | null;
