import { TextStyle } from 'react-native';

import { ComponentTheme } from '$theme/types';

// * We need this empty theme to override default one.
// * You can extend it if you need to.
export const RadioLabel = {
  theme: {},
} satisfies ComponentTheme<TextStyle>;
