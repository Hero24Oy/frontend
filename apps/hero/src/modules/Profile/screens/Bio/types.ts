import { Maybe } from '$core';

export type BioBase = {
  languages: string[] | null;
  info?: Maybe<string>;
};
