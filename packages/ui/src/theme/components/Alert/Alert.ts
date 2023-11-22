import { config as defaultConfig } from '@gluestack-ui/config';
import merge from 'lodash/merge';
import { ViewProps } from 'react-native';

import { ComponentTheme } from '$theme/types';

const customAlertConfig = {
  theme: {
    borderRadius: 8,
  },
} satisfies ComponentTheme<ViewProps>;

export const Alert = merge(defaultConfig.components.Alert, customAlertConfig);
