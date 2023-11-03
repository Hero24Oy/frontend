import { config as defaultConfig } from '@gluestack-ui/config';
import merge from 'lodash/merge';

import { ComponentTheme } from '$theme/types';

const customAlertConfig = {
  theme: {
    borderRadius: 20,
  },
} satisfies ComponentTheme;

export const Alert = merge(defaultConfig.components.Alert, customAlertConfig);
