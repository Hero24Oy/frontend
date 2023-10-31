import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';
import { ViewStyle } from 'react-native';

import { ComponentTheme } from '$theme/types';

const AlertTheme = {
  theme: {
    borderRadius: 20,
  },
} satisfies ComponentTheme<ViewStyle>;

export const Alert = merge(config.components.Alert, AlertTheme);
