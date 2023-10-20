import { Direction } from "../types";

type ReturnType = {
  upper: boolean | null;
  right: boolean | null;
  left: boolean | null;
} | null;

export const getDirectionValues = (direction?: Direction): ReturnType => {
  if (!direction) {
    return null;
  }

  return {
    upper: direction === 'upper' ? true : null,
    right: direction === 'right' ? true : null,
    left: direction === 'left' ? true : null,
  };
}