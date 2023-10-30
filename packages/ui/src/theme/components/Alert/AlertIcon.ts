import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';

import { IconSize } from '../../constants';
import { ComponentTheme } from '../../types';

const AlertIconTheme = {
  theme: {
    marginRight: 5,
    props: {
      size: IconSize.MEDIUM,
    },
  },
} satisfies ComponentTheme;

export const AlertIcon = merge(config.components.AlertIcon, AlertIconTheme);
