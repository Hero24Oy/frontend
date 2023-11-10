import { TextProps, TextStyle } from 'react-native';

import { TextVariant } from '$components/atoms/Text/types';
import { Color, Font, FontSize, LineHeight } from '$theme/constants';
import { ComponentTheme, SxValues } from '$theme/types';

export type TextThemeVariants = {
  variant: Record<`${TextVariant}`, SxValues<TextStyle>>;
};

export const Text = {
  theme: {
    color: Color.DARK_00,
    fontFamily: Font.ONEST_REGULAR,
    fontWeight: '400',
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
        [TextVariant.MEDIUM]: {
          fontSize: FontSize.MD,
          lineHeight: LineHeight.MD,
          fontFamily: Font.ONEST_MEDIUM,
          fontWeight: '500',
        },
        [TextVariant.DESCRIPTOR]: {
          fontSize: FontSize.XS,
          lineHeight: LineHeight.XS,
        },
        [TextVariant.LINK]: {
          textDecorationColor: Color.DARK_00,
          textDecorationStyle: 'solid',
          textDecorationLine: 'underline',
        },
      },
    },
    defaultProps: {
      variant: TextVariant.SMALL,
    },
  },
} satisfies ComponentTheme<TextProps, TextThemeVariants>;
