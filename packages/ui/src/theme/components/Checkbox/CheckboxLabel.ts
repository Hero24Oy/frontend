import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';
import { TextProps } from 'react-native';

import { Color } from '$theme/constants/colors';
import { ComponentTheme } from '$theme/types';

const CheckboxLabelTheme = {
  theme: {
    ':checked': {
      color: Color.DARK_00,
    },
    color: Color.DARK_00,
  },
} satisfies ComponentTheme<TextProps>;

export const CheckboxLabel = merge(
  config.components.CheckboxLabel,
  CheckboxLabelTheme,
);
