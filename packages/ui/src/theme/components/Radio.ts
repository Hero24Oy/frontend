import { RadioVariant } from 'components/atoms/RadioGroup';

import { ComponentTheme, DescendantStyle } from '../types';

export const Radio = {
  theme: {
    variants: {
      variant: {
        [RadioVariant.BUTTON]: {
          borderColor: '$gray_02',
          borderWidth: 1,
          borderRadius: 8,
          gap: 4,
          _text: {
            textAlign: 'center',
            color: '$dark_01',
            fontSize: '$small',
            fontWeight: '$normal',
            paddingHorizontal: 12,
            paddingVertical: 8,
            lineHeight: '$default',
          },
          ':checked': {
            backgroundColor: '$red_01',
            borderColor: '$transparent',
            _text: {
              color: '$white_01',
            },
          },
        },
      },
    },
  },
  componentConfig: { descendantStyle: [DescendantStyle.TEXT] },
} satisfies ComponentTheme;
