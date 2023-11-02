/* eslint-disable @typescript-eslint/no-redeclare */ // TODO

import { $Values } from 'utility-types';

export const Size = {
  XXXL: '3xl',
  XXL: '2xl',
  XL: 'xl',
  LG: 'lg',
  MD: 'md',
  SM: 'sm',
  XS: 'xs',
  XXS: '2xs',
  FULL: 'full',
} as const;

export type Size = $Values<typeof Size>;
