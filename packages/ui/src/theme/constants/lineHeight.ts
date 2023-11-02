import { FontSize } from './fontSizes';
import { SizeKeys } from './sizes';

export const LineHeight: Record<Exclude<SizeKeys, 'FULL' | '2XS'>, number> = {
  '3XL': FontSize['3XL'] * 1.5,
  '2XL': FontSize['2XL'] * 1.2,
  XL: FontSize.XL * 1.3,
  LG: FontSize.LG * 1.3,
  MD: FontSize.MD * 1.5,
  SM: FontSize.SM * 1.5,
  XS: FontSize.XS * 1.5,
};
