import { TextInputProps } from 'react-native';

import { Font } from '$theme/constants';
import { ComponentTheme } from '$theme/types';

export const TextareaInput = {
  theme: {
    fontFamily: Font.ONEST_REGULAR,
    fontWeight: '400',
  },
} satisfies ComponentTheme<TextInputProps>;
