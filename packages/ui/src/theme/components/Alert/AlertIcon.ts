import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';

import { ComponentTheme, ViewSxValues } from '$theme/types';

const AlertIconTheme = {
  theme: {
    marginRight: 5,
  },
} satisfies ComponentTheme<ViewSxValues>;

export const AlertIcon = merge(config.components.AlertIcon, AlertIconTheme);
