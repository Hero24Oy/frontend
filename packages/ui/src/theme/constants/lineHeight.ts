import { FontSize } from './fontSizes';
import { Size } from './sizes';

export const LineHeight: Record<Exclude<Size, '2xs' | 'full'>, number> = {
  [Size.XXXL]: FontSize.XXXL * 1.5,
  [Size.XXL]: FontSize.XXL * 1.2,
  [Size.XL]: FontSize.XL * 1.3,
  [Size.LG]: FontSize.LG * 1.3,
  [Size.MD]: FontSize.MD * 1.5,
  [Size.SM]: FontSize.SM * 1.5,
  [Size.XS]: FontSize.XS * 1.5,
};
