import { ComponentTheme, TextSxValues } from '../../types';

import { Color } from '$theme/constants';

export const CodeFieldCell = {
  theme: {
    width: 50,
    height: 60,
    lineHeight: 55,
    fontSize: 14,
    borderRadius: 6,
    color: Color.DARK_01,
    borderWidth: 1,
    borderColor: '#DDDDE1',
    textAlign: 'center',
    textAlignVertical: 'center',
    variants: {
      isFocused: {
        true: {
          borderColor: Color.DARK_01,
        },
      },
    },
  },
} satisfies ComponentTheme<TextSxValues>;
