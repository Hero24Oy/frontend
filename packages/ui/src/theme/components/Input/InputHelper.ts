import { TextProps } from 'react-native';

import {
  Color,
  Font,
  FontSize,
  FontWeight,
  LineHeight,
} from '$theme/constants';
import { ComponentTheme } from '$theme/types';

export const InputHelper = {
  theme: {
    color: Color.GREY_01,
    fontFamily: Font.ONEST_400,
    fontWeight: FontWeight.REGULAR,
    fontSize: FontSize.SM,
    lineHeight: LineHeight.SM,
    height: LineHeight.SM,
  },
} satisfies ComponentTheme<TextProps>;
