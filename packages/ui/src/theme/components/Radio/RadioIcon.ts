import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';
import { ViewStyle } from 'react-native';

import { Color } from '$theme/constants';
import { ComponentTheme } from '$theme/types';

const RadioIconTheme = {
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
} satisfies ComponentTheme<ViewStyle>;

export const RadioIcon = merge(config.components.RadioIcon, RadioIconTheme);
