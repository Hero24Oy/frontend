/* eslint-disable @typescript-eslint/no-duplicate-enum-values -- we need duplicate values for each font size */

import { FontSize } from './fontSizes';
import { TextSize } from './sizes';

enum LineHeightPercentage {
  XXXL = 150,
  XXL = 120,
  XL = 130,
  LG = 130,
  MD = 150,
  SM = 150,
  XS = 150,
}

export const LineHeight = {
  [TextSize.XXXL]: (FontSize.XXXL * LineHeightPercentage.XXXL) / 100,
  [TextSize.XXL]: (FontSize.XXL * LineHeightPercentage.XXL) / 100,
  [TextSize.XL]: (FontSize.XL * LineHeightPercentage.XL) / 100,
  [TextSize.LG]: (FontSize.LG * LineHeightPercentage.LG) / 100,
  [TextSize.MD]: (FontSize.MD * LineHeightPercentage.MD) / 100,
  [TextSize.SM]: (FontSize.SM * LineHeightPercentage.SM) / 100,
  [TextSize.XS]: (FontSize.XS * LineHeightPercentage.XS) / 100,
} as const satisfies Record<TextSize, number>;
