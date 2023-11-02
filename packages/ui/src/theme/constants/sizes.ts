import { $Keys, $Values } from 'utility-types';

export const Size = {
  '3XL': '3xl',
  '2XL': '2xl',
  XL: 'xl',
  LG: 'lg',
  MD: 'md',
  SM: 'sm',
  XS: 'xs',
  '2XS': '2xs',
  FULL: 'full',
} as const;

export type Size = $Values<typeof Size>;

export type SizeKeys = $Keys<typeof Size>;
