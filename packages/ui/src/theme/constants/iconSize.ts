import { SizeKeys } from './sizes';

type Keys = Extract<SizeKeys, 'XS' | 'SM' | 'MD' | 'LG'>;

export const IconSize: Record<Keys, number> = {
  LG: 24,
  MD: 20,
  SM: 18,
  XS: 16,
};
