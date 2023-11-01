import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';
import { ViewProps } from 'react-native';

import { ComponentTheme } from '$theme/types';

const AlertTheme = {
  theme: {
    borderRadius: 20,
  },
} satisfies ComponentTheme<ViewProps>;

export const Alert = merge(config.components.Alert, AlertTheme);
