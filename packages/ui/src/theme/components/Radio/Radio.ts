import { RadioVariant } from '$components/atoms/RadioGroup';
import { Color, FontSize, FontWeight, LineHeight } from '$theme/constants';
import { ComponentTheme, DescendantStyleName } from '$theme/types';

export const Radio = {
  theme: {
    variants: {
      variant: {
        [RadioVariant.BUTTON]: {
          borderColor: Color.GREY_02,
          borderWidth: 1,
          borderRadius: 8,
          gap: 4,
          _text: {
            textAlign: 'center',
            color: Color.DARK_00,
            fontSize: FontSize.SM,
            fontWeight: FontWeight.REGULAR,
            paddingHorizontal: 12,
            paddingVertical: 8,
            lineHeight: LineHeight.SM,
          },
          ':checked': {
            backgroundColor: Color.RED_01,
            borderColor: Color.TRANSPARENT,
            _text: {
              color: Color.WHITE_00,
            },
          },
        },
      },
    },
  },
  componentConfig: { descendantStyle: [DescendantStyleName.TEXT] },
} satisfies ComponentTheme;
