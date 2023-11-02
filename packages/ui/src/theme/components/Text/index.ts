import { TextStyle } from 'react-native';

import { TextVariant } from '$components/atoms/Text/types';
import {
  Color,
  FontSize,
  FontWeight,
  LineHeight,
  Size,
} from '$theme/constants';
import { ComponentTheme } from '$theme/types';

export const Text = {
  theme: {
    color: Color.DARK_00,
    fontWeight: FontWeight.REGULAR,
    fontSize: FontSize.SM,
    lineHeight: LineHeight[Size.SM],
    variants: {
      variant: {
        [TextVariant.REGULAR]: {
          fontSize: FontSize.MD,
          lineHeight: LineHeight[Size.MD],
        },
        [TextVariant.SMALL]: {
          fontSize: FontSize.SM,
          lineHeight: LineHeight[Size.SM],
        },
        [TextVariant.DESCRIPTOR]: {
          fontSize: FontSize.XS,
          lineHeight: LineHeight[Size.XS],
        },
      },
    },
  },
} satisfies ComponentTheme<TextStyle>;
