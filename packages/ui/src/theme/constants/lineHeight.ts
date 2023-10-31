import { FontSize } from './fontSizes';
import { TextSize } from './sizes';

export const LineHeight: Record<TextSize, number> = {
  [TextSize.XXXL]: FontSize.XXXL * 1.5,
  [TextSize.XXL]: FontSize.XXL * 1.2,
  [TextSize.XL]: FontSize.XL * 1.3,
  [TextSize.LG]: FontSize.LG * 1.3,
  [TextSize.MD]: FontSize.MD * 1.5,
  [TextSize.SM]: FontSize.SM * 1.5,
  [TextSize.XS]: FontSize.XS * 1.5,
};
