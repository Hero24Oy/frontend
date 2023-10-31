import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';

import { Color } from '$theme/constants/colors';

const checkboxLabelConfig = config.components.CheckboxLabel;

const customStyles = {
  theme: {
    ':checked': {
      color: Color.DARK_00,
    },
    color: Color.DARK_00,
  },
};

export const CheckboxLabel = merge(checkboxLabelConfig, customStyles);
