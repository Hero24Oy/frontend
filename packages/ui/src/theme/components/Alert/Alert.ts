import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';

import { ComponentTheme, ViewSxValues } from '$theme/types';

const AlertTheme = {
  theme: {
    borderRadius: 20,
  },
} satisfies ComponentTheme<ViewSxValues>;

export const Alert = merge(config.components.Alert, AlertTheme);
