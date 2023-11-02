import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';
import { ViewProps } from 'react-native';

import { Color } from '$theme/constants/colors';
import { ComponentTheme } from '$theme/types';

const CheckboxIndicatorTheme = {
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
} satisfies ComponentTheme<ViewProps>;

export const CheckboxIndicator = merge(
  config.components.CheckboxIndicator,
  CheckboxIndicatorTheme,
);
