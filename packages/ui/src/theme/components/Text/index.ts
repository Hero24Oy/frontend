import { TextProps, TextStyle } from 'react-native';

import { TextVariant } from '$atoms';
import { Color, FontSize, FontWeight, LineHeight } from '$theme/constants';
import { ComponentTheme, SxValues } from '$theme/types';

export type TextThemeVariants = {
  variant: Record<`${TextVariant}`, SxValues<TextStyle>>;
};

export const Text = {
  theme: {
    color: Color.DARK_00,
    fontWeight: FontWeight.REGULAR,
    fontSize: FontSize.SM,
    lineHeight: LineHeight.SM,
    variants: {
      variant: {
        [TextVariant.REGULAR]: {
          fontSize: FontSize.MD,
          lineHeight: LineHeight.MD,
        },
        [TextVariant.SMALL]: {
          fontSize: FontSize.SM,
          lineHeight: LineHeight.SM,
        },
        [TextVariant.DESCRIPTOR]: {
          fontSize: FontSize.XS,
          lineHeight: LineHeight.XS,
        },
      },
    },
  },
} satisfies ComponentTheme<TextProps, TextThemeVariants>;
