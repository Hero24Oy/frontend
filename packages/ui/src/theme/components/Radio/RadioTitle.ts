import { TextProps } from 'react-native';

import { Color, Font, FontSize, LineHeight } from '$theme/constants';
import { ComponentTheme } from '$theme/types';

export const RadioTitle = {
  theme: {
    color: Color.GREY_01,
    fontFamily: Font.ONEST_MEDIUM,
    fontWeight: '400',
    fontSize: FontSize.SM,
    lineHeight: LineHeight.SM,
    marginBottom: 4,
  },
} satisfies ComponentTheme<TextProps>;
