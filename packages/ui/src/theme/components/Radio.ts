import { RadioVariants } from 'components/atoms/RadioGroup/types';

import { ComponentTheme } from '../types';

export const Radio = {
  theme: {
    variants: {
      variant: {
        [RadioVariants.BUTTON]: {
          borderColor: '$gray_1',
          borderWidth: 1,
          borderRadius: 8,
          gap: 4,
          _text: {
            textAlign: 'center',
            color: '$dark_0',
            fontSize: '$small',
            fontWeight: '$normal',
            paddingHorizontal: 12,
            paddingVertical: 8,
            lineHeight: '$default',
          },
          ':checked': {
            backgroundColor: '$red_0',
            borderColor: '$transparent',
            _text: {
              color: '$white_0',
            },
          },
        },
      },
    },
  },
  componentConfig: { descendantStyle: ['_text'] },
} satisfies ComponentTheme;
