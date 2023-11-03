import { config as defaultConfig } from '@gluestack-ui/config';
import merge from 'lodash/merge';

import { IconSize } from '$theme/constants';
import { ComponentTheme } from '$theme/types';

const customAlertIconConfig = {
  theme: {
    marginRight: 5,
    props: {
      size: IconSize.MD,
    },
  },
} satisfies ComponentTheme;

export const AlertIcon = merge(
  defaultConfig.components.AlertIcon,
  customAlertIconConfig,
);
