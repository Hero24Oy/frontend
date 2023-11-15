import { $Keys } from 'utility-types';

export const Countries = {
  FI: 'FI',
} as const;

export const defaultCountry: $Keys<typeof Countries> = 'FI';
