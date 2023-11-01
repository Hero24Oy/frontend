import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';

import { Color } from '$theme/constants/colors';

const checkboxIndicatorConfig = config.components.CheckboxIndicator;

const customCheckboxIndicatorConfig = {
  theme: {
    marginRight: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: Color.GREY_LIGHT_00,
    ':focus': {
      borderColor: Color.RED_00,
      backgroundColor: Color.RED_00,
    },
    ':hover': {
      borderColor: Color.RED_00,
    },
    ':checked': {
      borderColor: Color.RED_00,
      backgroundColor: Color.RED_00,
    },
    ':active': {
      ':checked': {
        backgroundColor: Color.RED_01,
        borderColor: Color.RED_01,
      },
    },
  },
};

export const CheckboxIndicator = merge(
  checkboxIndicatorConfig,
  customCheckboxIndicatorConfig,
);
