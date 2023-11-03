import { TextStyle } from 'react-native';

import {
  Color,
  FontSize,
  FontWeight,
  LineHeight,
  Size,
} from '$theme/constants';
import { ComponentTheme } from '$theme/types';

export const InputTitle = {
  theme: {
    color: Color.GREY_01,
    fontWeight: FontWeight.REGULAR,
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
} satisfies ComponentTheme<Record<string, string>, TextStyle>;
