import { TextProps, TextStyle } from 'react-native';

import { InputSize } from '$components';
import { Color, Font, FontSize, LineHeight, Size } from '$theme/constants';
import { ComponentTheme, SxValues } from '$theme/types';

export type InputTitleThemeVariants = {
  size: Record<InputSize, SxValues<TextStyle>>;
};

export const InputTitle = {
  theme: {
    color: Color.GREY_01,
    fontFamily: Font.ONEST_MEDIUM,
    fontWeight: '400',
    fontSize: FontSize.SM,
    lineHeight: LineHeight.SM,
    variants: {
      size: {
        [Size.SM]: {
          fontSize: FontSize.SM,
          lineHeight: LineHeight.SM,
        },
        [Size.MD]: {
          fontSize: FontSize.MD,
          lineHeight: LineHeight.MD,
        },
      },
    },
  },
} satisfies ComponentTheme<TextProps, InputTitleThemeVariants>;
