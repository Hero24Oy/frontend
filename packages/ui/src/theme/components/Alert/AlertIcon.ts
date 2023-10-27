import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';

import { ComponentTheme } from '../../types';

const AlertIconTheme = {
  theme: {
    marginRight: 5,
  },
} satisfies ComponentTheme;

export const AlertIcon = merge(config.components.AlertIcon, AlertIconTheme);
