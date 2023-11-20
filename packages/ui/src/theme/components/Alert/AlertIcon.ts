import { config as defaultConfig } from '@gluestack-ui/config';
import merge from 'lodash/merge';
import { ViewProps } from 'react-native';

import { IconSize } from '$theme/constants';
import { ComponentTheme } from '$theme/types';

const customAlertIconConfig = {
  theme: {
    props: {
      size: IconSize.MD,
    },
  },
} satisfies ComponentTheme<ViewProps>;

export const AlertIcon = merge(
  defaultConfig.components.AlertIcon,
  customAlertIconConfig,
);
