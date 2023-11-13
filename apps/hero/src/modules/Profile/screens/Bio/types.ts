import { Maybe } from '@hero24/common';

export type Bio = {
  languages: string[] | null;
  info?: Maybe<string>;
};
