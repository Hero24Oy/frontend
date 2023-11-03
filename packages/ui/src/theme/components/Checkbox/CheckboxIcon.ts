import { config as defaultConfig } from '@gluestack-ui/config';
import merge from 'lodash/merge';

import { Color } from '$theme/constants/colors';

const customCheckboxIconConfig = {
  theme: {
    tintColor: Color.RED_00,
    color: Color.RED_00,
  },
};

export const CheckboxIcon = merge(
  defaultConfig.components.CheckboxIcon,
  customCheckboxIconConfig,
);
