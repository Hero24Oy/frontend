import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';

import { ComponentTheme } from '$theme';

const AlertTheme = {
  theme: {
    borderRadius: 20,
  },
} satisfies ComponentTheme;

export const Alert = merge(config.components.Alert, AlertTheme);
