import { TextStyle } from 'react-native';

import { InputSize } from '$components/molecules/Input/types';
import { Color, FontSize, FontWeight, LineHeight } from '$theme/constants';
import { ComponentTheme } from '$theme/types';

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
} satisfies ComponentTheme<TextStyle>;
