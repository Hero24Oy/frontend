import { InputSize } from '$components/molecules/Input/types';
import { Color, FontSize, FontWeight, LineHeight } from '$theme/constants';
import { ComponentTheme, TextSxValues } from '$theme/types';

export const InputTitle = {
  theme: {
    color: Color.GRAY_01,
    fontWeight: FontWeight.NORMAL,
    fontSize: FontSize.DOUBLE_EXTRA_LARGE,
    lineHeight: LineHeight.SMALL,
    variants: {
      size: {
        [InputSize.SMALL]: {
          fontSize: FontSize.SMALL,
          lineHeight: LineHeight.SMALL,
        },
        [InputSize.MEDIUM]: {
          fontSize: FontSize.MEDIUM,
          lineHeight: LineHeight.MEDIUM,
        },
      },
    },
  },
} satisfies ComponentTheme<TextSxValues>;
