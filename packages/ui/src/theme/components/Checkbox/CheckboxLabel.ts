import { config as defaultConfig } from '@gluestack-ui/config';
import merge from 'lodash/merge';

import { Color } from '$theme/constants/colors';

const customCheckboxLabelConfig = {
  theme: {
    ':checked': {
      color: Color.DARK_00,
    },
    color: Color.DARK_00,
  },
};

export const CheckboxLabel = merge(
  defaultConfig.components.CheckboxLabel,
  customCheckboxLabelConfig,
);
