import { ViewProps } from 'react-native';

import { ComponentTheme } from '$theme';

export const Badge = {
  theme: {},
} satisfies ComponentTheme<ViewProps>;

export * from './outlined';
export * from './solid';
