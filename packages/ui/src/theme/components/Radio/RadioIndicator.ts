import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';

import { Color } from '$theme/constants';
import { ComponentTheme } from '$theme/types';

export const RadioIndicatorTheme = {
  theme: {
    ':checked': {
      borderColor: Color.RED_00,
    },
    ':invalid': {
      borderColor: Color.RED_01,
    },
    ':focusVisible': {
      borderColor: Color.BLUE_00,
    },
    ':hover': {
      borderColor: Color.RED_02,
    },
    ':active': {
      borderColor: Color.RED_02,
    },
  },
} satisfies ComponentTheme;

export const RadioIndicator = merge(
  config.components.RadioIndicator,
  RadioIndicatorTheme,
);
