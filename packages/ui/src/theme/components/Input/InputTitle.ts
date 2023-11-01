import { TextProps, TextStyle } from 'react-native';

import { InputSize } from '$molecules';
import { Color, FontSize, FontWeight, LineHeight } from '$theme/constants';
import { ComponentTheme, SxValues } from '$theme/types';

export type InputTitleThemeVariants = {
  size: Record<`${InputSize}`, SxValues<TextStyle>>;
};

export const InputTitle = {
  theme: {
    color: Color.GREY_01,
    fontWeight: FontWeight.REGULAR,
    fontSize: FontSize.SM,
    lineHeight: LineHeight.SM,
    variants: {
      size: {
        [InputSize.SMALL]: {
          fontSize: FontSize.SM,
          lineHeight: LineHeight.SM,
        },
        [InputSize.MEDIUM]: {
          fontSize: FontSize.MD,
          lineHeight: LineHeight.MD,
        },
      },
    },
  },
} satisfies ComponentTheme<TextProps, InputTitleThemeVariants>;
