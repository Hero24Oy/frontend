import { TextStyle } from 'react-native';

import {
  Color,
  FontSize,
  FontWeight,
  LineHeight,
  Size,
} from '$theme/constants';
import { ComponentTheme } from '$theme/types';

export const InputHelper = {
  theme: {
    color: Color.GREY_01,
    fontWeight: FontWeight.REGULAR,
    fontSize: FontSize.SM,
    lineHeight: LineHeight[Size.SM],
    height: LineHeight[Size.SM],
  },
} satisfies ComponentTheme<Record<string, string>, TextStyle>;
