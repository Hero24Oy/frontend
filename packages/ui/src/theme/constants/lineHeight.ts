import { FontSize } from './fontSizes';
import { SizeKeys } from './sizes';

type Keys = Extract<
  SizeKeys,
  'XXXL' | 'XXL' | 'XL' | 'LG' | 'MD' | 'SM' | 'XS'
>;

export const LineHeight: Record<Keys, number> = {
  XXXL: FontSize.XXXL * 1.5,
  XXL: FontSize.XXL * 1.2,
  XL: FontSize.XL * 1.3,
  LG: FontSize.LG * 1.5,
  MD: FontSize.MD * 1.3,
  SM: FontSize.SM * 1.5,
  XS: FontSize.XS * 1.5,
};
