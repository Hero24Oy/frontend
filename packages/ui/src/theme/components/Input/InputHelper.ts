import { TextProps } from 'react-native';

import { Color, FontSize, FontWeight, LineHeight } from '$theme/constants';
import { ComponentTheme } from '$theme/types';

export const InputHelper = {
  theme: {
    color: Color.GREY_01,
    fontWeight: FontWeight.REGULAR,
    fontSize: FontSize.SM,
    lineHeight: LineHeight.SM,
    height: LineHeight.SM,
  },
} satisfies ComponentTheme<TextProps>;
