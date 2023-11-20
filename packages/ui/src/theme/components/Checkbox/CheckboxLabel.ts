import { config as defaultConfig } from '@gluestack-ui/config';
import merge from 'lodash/merge';
import { TextProps } from 'react-native';

import { Font, FontSize } from '$theme/constants';
import { Color } from '$theme/constants/colors';
import { ComponentTheme } from '$theme/types';

const customCheckboxLabelConfig = {
  theme: {
    fontWeight: '400',
    fontFamily: Font.ONEST_REGULAR,
    fontSize: FontSize.MD,
    ':checked': {
      color: Color.DARK_00,
    },
    color: Color.DARK_00,
  },
} satisfies ComponentTheme<TextProps>;

export const CheckboxLabel = merge(
  defaultConfig.components.CheckboxLabel,
  customCheckboxLabelConfig,
);
