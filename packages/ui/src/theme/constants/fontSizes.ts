import { SizeKeys } from './sizes';

type Keys = Extract<
  SizeKeys,
  'XXXL' | 'XXL' | 'XL' | 'LG' | 'MD' | 'SM' | 'XS'
>;

export const FontSize: Record<Keys, number> = {
  XXXL: 28,
  XXL: 24,
  XL: 20,
  LG: 17,
  MD: 16,
  SM: 14,
  XS: 12,
};
