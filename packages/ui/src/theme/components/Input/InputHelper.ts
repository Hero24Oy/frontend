import { Color, FontSize, FontWeight, LineHeight } from '$theme/constants';
import { ComponentTheme, TextSxValues } from '$theme/types';

export const InputHelper = {
  theme: {
    color: Color.GRAY_01,
    fontWeight: FontWeight.REGULAR,
    fontSize: FontSize.SM,
    lineHeight: LineHeight.SM,
    height: LineHeight.SM,
  },
} satisfies ComponentTheme<TextSxValues>;
