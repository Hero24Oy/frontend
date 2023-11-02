import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';
import { ViewProps } from 'react-native';

import { ComponentTheme } from '$theme/types';

const CheckboxTheme = {
  theme: {
    borderRadius: 20,
  },
} satisfies ComponentTheme<ViewProps>;

export const Checkbox = merge(config.components.Checkbox, CheckboxTheme);
