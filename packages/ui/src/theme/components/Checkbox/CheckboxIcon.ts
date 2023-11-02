import { RNProps } from '@gluestack-style/react/lib/typescript/types';
import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';

import { Color } from '$theme/constants/colors';
import { ComponentTheme } from '$theme/types';

const CheckboxIconTheme = {
  theme: {
    tintColor: Color.RED_00,
    color: Color.RED_00,
  },
} satisfies ComponentTheme<RNProps>;

export const CheckboxIcon = merge(
  config.components.CheckboxIcon,
  CheckboxIconTheme,
);
