import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';
import { ViewProps } from 'react-native';

import { ComponentTheme } from '$theme/types';

const customActionsheetContentConfig = {
  theme: {
    alignItems: 'flex-start',
  },
} satisfies ComponentTheme<ViewProps>;

export const ActionsheetContent = merge(
  config.components.ActionsheetContent,
  customActionsheetContentConfig,
);
