import { TextSize } from '$atoms/Text/types';
import { Color, FontSize, FontWeight, LineHeight } from '$theme/constants';
import { ComponentTheme, TextSxValues } from '$theme/types';

export const Text = {
  theme: {
    color: Color.DARK_01,
    fontWeight: FontWeight.NORMAL,
    fontSize: FontSize.SMALL,
    lineHeight: LineHeight.SMALL,
    variants: {
      size: {
        [TextSize.XS]: {
          fontSize: FontSize.EXTRA_SMALL,
          lineHeight: LineHeight.EXTRA_SMALL,
        },
        [TextSize.SM]: {
          fontSize: FontSize.SMALL,
          lineHeight: LineHeight.SMALL,
        },
        [TextSize.MD]: {
          fontSize: FontSize.MEDIUM,
          lineHeight: LineHeight.MEDIUM,
        },
        [TextSize.LG]: {
          fontSize: FontSize.LARGE,
          lineHeight: LineHeight.LARGE,
        },
        [TextSize.XL]: {
          fontSize: FontSize.EXTRA_LARGE,
          lineHeight: LineHeight.EXTRA_LARGE,
        },
        [TextSize.XXL]: {
          fontSize: FontSize.DOUBLE_EXTRA_LARGE,
          lineHeight: LineHeight.DOUBLE_EXTRA_LARGE,
        },
      },
    },
  },
} satisfies ComponentTheme<TextSxValues>;
