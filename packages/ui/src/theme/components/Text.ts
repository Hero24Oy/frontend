import { TextProps, TextStyle } from 'react-native';

import { TextVariant } from '$components/atoms/Text/types';
import { FontSize, FontWeight, LineHeight } from '$theme/constants';
import { ComponentTheme, SxValues } from '$theme/types';

export type TextThemeVariants = {
  variant: Record<`${TextVariant}`, SxValues<TextStyle>>;
};

export const Text = {
  theme: {
    fontWeight: FontWeight.REGULAR,
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
        [TextVariant.H1]: {
          fontSize: FontSize.XXXL,
          lineHeight: LineHeight.XXXL,
          fontWeight: FontWeight.SEMI_BOLD,
        },
        [TextVariant.H2]: {
          fontSize: FontSize.XXL,
          lineHeight: LineHeight.XXL,
          fontWeight: FontWeight.SEMI_BOLD,
        },
        [TextVariant.H3]: {
          fontSize: FontSize.XL,
          lineHeight: LineHeight.XL,
          fontWeight: FontWeight.SEMI_BOLD,
        },
        [TextVariant.H4]: {
          fontSize: FontSize.LG,
          lineHeight: LineHeight.LG,
          fontWeight: FontWeight.MEDIUM,
        },
        [TextVariant.H5]: {
          fontSize: FontSize.MD,
          lineHeight: LineHeight.MD,
          fontWeight: FontWeight.MEDIUM,
        },
      },
    },
    defaultProps: {
      variant: TextVariant.SMALL,
    },
  },
} satisfies ComponentTheme<TextProps, TextThemeVariants>;
