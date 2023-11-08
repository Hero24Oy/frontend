import { TextProps, TextStyle } from 'react-native';

import { TextVariant } from '$components/atoms/Text/types';
import { Color, FontSize, FontWeight, LineHeight } from '$theme/constants';
import { ComponentTheme, SxValues } from '$theme/types';

export type TextThemeVariants = {
  variant: Record<`${TextVariant}`, SxValues<TextStyle>>;
};

export const Text = {
  theme: {
    fontWeight: FontWeight.REGULAR,
    color: Color.DARK_00,
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
        [TextVariant.MEDIUM]: {
          fontSize: FontSize.MD,
          lineHeight: LineHeight.MD,
          fontWeight: FontWeight.SEMI_BOLD,
        },
        [TextVariant.DESCRIPTOR]: {
          fontSize: FontSize.XS,
          lineHeight: LineHeight.XS,
        },
      },
    },
    defaultProps: {
      variant: TextVariant.SMALL,
    },
  },
} satisfies ComponentTheme<TextProps, TextThemeVariants>;
