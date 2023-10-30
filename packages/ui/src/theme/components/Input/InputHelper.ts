import { Color, FontSize, FontWeight, LineHeight } from '$theme/constants';
import { ComponentTheme, TextSxValues } from '$theme/types';

export const InputHelper = {
  theme: {
    color: Color.GRAY_01,
    fontWeight: FontWeight.NORMAL,
    fontSize: FontSize.SMALL,
    lineHeight: LineHeight.SMALL,
    height: LineHeight.SMALL,
  },
} satisfies ComponentTheme<TextSxValues>;
