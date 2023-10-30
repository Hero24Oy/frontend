import { RadioVariant } from '$atoms';
import { Color, FontSize, FontWeight, LineHeight } from '$theme/constants';
import {
  ComponentTheme,
  DescendantStyleName,
  ViewSxValues,
} from '$theme/types';

export const Radio = {
  theme: {
    variants: {
      variant: {
        [RadioVariant.BUTTON]: {
          borderColor: Color.GRAY_02,
          borderWidth: 1,
          borderRadius: 8,
          gap: 4,
          _text: {
            textAlign: 'center',
            color: Color.DARK_01,
            fontSize: FontSize.SMALL,
            fontWeight: FontWeight.NORMAL,
            paddingHorizontal: 12,
            paddingVertical: 8,
            lineHeight: LineHeight.SMALL,
          },
          ':checked': {
            backgroundColor: Color.RED_01,
            borderColor: Color.TRANSPARENT,
            _text: {
              color: Color.WHITE_01,
            },
          },
        },
      },
    },
  },
  componentConfig: { descendantStyle: [DescendantStyleName.TEXT] },
} satisfies ComponentTheme<ViewSxValues>;
