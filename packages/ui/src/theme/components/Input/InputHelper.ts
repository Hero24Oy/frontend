import { TextProps } from 'react-native';

import { Color, Font, FontSize, LineHeight } from '$theme/constants';
import { ComponentTheme } from '$theme/types';

export const InputHelper = {
  theme: {
    color: Color.GREY_01,
    fontFamily: Font.ONEST_REGULAR,
    fontWeight: '400',
    fontSize: FontSize.SM,
    lineHeight: LineHeight.SM,
    height: LineHeight.SM,
  },
} satisfies ComponentTheme<TextProps>;
