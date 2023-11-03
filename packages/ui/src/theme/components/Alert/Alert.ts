import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';

import { ComponentTheme } from '$theme/types';

const alertTheme = {
  theme: {
    borderRadius: 20,
  },
} satisfies ComponentTheme;

export const Alert = merge(config.components.Alert, alertTheme);
