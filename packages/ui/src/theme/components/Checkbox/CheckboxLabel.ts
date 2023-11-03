import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';

import { Color } from '$theme/constants/colors';

const checkboxLabelTheme = {
  theme: {
    ':checked': {
      color: Color.DARK_00,
    },
    color: Color.DARK_00,
  },
};

export const CheckboxLabel = merge(
  config.components.CheckboxLabel,
  checkboxLabelTheme,
);
