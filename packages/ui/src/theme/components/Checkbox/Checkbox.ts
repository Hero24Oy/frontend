import { config as defaultConfig } from '@gluestack-ui/config';
import merge from 'lodash/merge';
import { ViewProps } from 'react-native';

import { ComponentTheme } from '$theme/types';

const customCheckboxConfig = {
  theme: {
    borderRadius: 20,
  },
} satisfies ComponentTheme<ViewProps>;

export const Checkbox = merge(
  defaultConfig.components.Checkbox,
  customCheckboxConfig,
);
