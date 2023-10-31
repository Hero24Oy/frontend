import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';

import { Color } from '$theme/constants/colors';

const checkboxIconConfig = config.components.CheckboxIcon;

const customStyles = {
  theme: {
    tintColor: Color.RED_00,
    color: Color.RED_00,
  },
};

export const CheckboxIcon = merge(checkboxIconConfig, customStyles);
