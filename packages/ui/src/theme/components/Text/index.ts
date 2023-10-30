import { TextVariants } from './constants';

import { Color, FontSize, FontWeight, LineHeight } from '$theme/constants';
import { ComponentTheme, TextSxValues } from '$theme/types';

export const Text = {
  theme: {
    color: Color.DARK_01,
    fontWeight: FontWeight.REGULAR,
    fontSize: FontSize.SM,
    lineHeight: LineHeight.SM,
    variants: {
      variant: {
        [TextVariants.REGULAR]: {
          fontSize: FontSize.MD,
          lineHeight: LineHeight.MD,
        },
        [TextVariants.SMALL]: {
          fontSize: FontSize.SM,
          lineHeight: LineHeight.SM,
        },
        [TextVariants.DESCRIPTOR]: {
          fontSize: FontSize.XS,
          lineHeight: LineHeight.XS,
        },
      },
    },
  },
} satisfies ComponentTheme<TextSxValues>;
