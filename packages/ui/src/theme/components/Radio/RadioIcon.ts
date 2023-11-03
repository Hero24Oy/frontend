import { config as defaultConfig } from '@gluestack-ui/config';
import merge from 'lodash/merge';
import { ViewProps } from 'react-native';

import { Color } from '$theme/constants';
import { ComponentTheme } from '$theme/types';

const customRadioIconConfig = {
  theme: {
    ':checked': {
      props: {
        color: Color.RED_00,
      },
      ':disabled': {
        props: {
          color: Color.GREY_01,
        },
      },
      ':invalid': {
        props: {
          color: Color.RED_02,
        },
      },
      ':hover': {
        props: {
          color: Color.RED_02,
        },
      },
    },
  },
} satisfies ComponentTheme<ViewProps>;

export const RadioIcon = merge(
  defaultConfig.components.RadioIcon,
  customRadioIconConfig,
);
