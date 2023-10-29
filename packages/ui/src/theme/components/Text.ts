import { TextSize, TextWeight } from '$atoms';
import {
  Color,
  ComponentTheme,
  FontSize,
  FontWeight,
  LineHeight,
} from '$theme';

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
      weight: {
        [TextWeight.HAIRLINE]: {
          fontWeight: FontWeight.HAIRLINE,
        },
        [TextWeight.THIN]: {
          fontWeight: FontWeight.THIN,
        },
        [TextWeight.LIGHT]: {
          fontWeight: FontWeight.LIGHT,
        },
        [TextWeight.NORMAL]: {
          fontWeight: FontWeight.NORMAL,
        },
        [TextWeight.MEDIUM]: {
          fontWeight: FontWeight.MEDIUM,
        },
        [TextWeight.SEMI_BOLD]: {
          fontWeight: FontWeight.SEMI_BOLD,
        },
        [TextWeight.BOLD]: {
          fontWeight: FontWeight.BOLD,
        },
        [TextWeight.EXTRA_BOLD]: {
          fontWeight: FontWeight.EXTRA_BOLD,
        },
        [TextWeight.BLACK]: {
          fontWeight: FontWeight.BLACK,
        },
        [TextWeight.EXTRA_BLACK]: {
          fontWeight: FontWeight.EXTRA_BLACK,
        },
      },
    },
  },
} satisfies ComponentTheme;
