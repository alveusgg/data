import { z } from "zod";

const iucnStatuses = {
  EX: "Extinct",
  EW: "Extinct in the Wild",
  CR: "Critically Endangered",
  EN: "Endangered",
  VU: "Vulnerable",
  NT: "Near Threatened",
  LC: "Least Concern",
  DD: "Data Deficient",
  NE: "Not Evaluated",
} as const;

const iucnFlags = {
  increasing: "with increasing population trend",
  decreasing: "with decreasing population trend",
} as const;

type IUCNStatuses = keyof typeof iucnStatuses;
type ICUNFlags = keyof typeof iucnFlags;
export type IUCNStatus = IUCNStatuses | `${IUCNStatuses}/${ICUNFlags}`;

const isIUCNStatuses = (str: string): str is IUCNStatuses =>
  Object.keys(iucnStatuses).includes(str);

const isIUCNFlags = (str: string): str is ICUNFlags =>
  Object.keys(iucnFlags).includes(str);

export const isIUCNStatus = (str: string): str is IUCNStatus => {
  const [status, flag, ...rest] = str.split("/");
  if (!status || rest.length > 0) return false;

  if (!isIUCNStatuses(status)) return false;
  if (flag !== undefined && !isIUCNFlags(flag)) return false;

  return true;
};

export const iucnStatusSchema = z.custom<IUCNStatus>(
  (val) => typeof val === "string" && isIUCNStatus(val),
  `must be a valid IUCN status (${Object.keys(iucnStatuses).join(", ")} [optionally suffixed with /${Object.keys(iucnFlags).join(", /")}])`,
);

export const getIUCNStatus = (fullStatus: IUCNStatus): string => {
  const [status, flag] = fullStatus.split("/");

  if (!status || !isIUCNStatuses(status))
    throw new Error(`Invalid IUCN status: ${status}`);
  if (!flag) return iucnStatuses[status];

  if (!isIUCNFlags(flag)) throw new Error(`Invalid IUCN flag: ${flag}`);
  return `${iucnStatuses[status]} ${iucnFlags[flag]}`;
};
