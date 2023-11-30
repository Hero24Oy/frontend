import { config } from '@gluestack-ui/config';
import merge from 'lodash/merge';
import { SwitchProps } from 'react-native';

import { SwitchSize } from '$components';
import { Color, Size } from '$theme/constants';
import { ComponentTheme, SxValues } from '$theme/types';

export type SwitchThemeVariants = {
  size: Record<SwitchSize, SxValues<SwitchProps>>;
};

const customSwitchConfig = {
  theme: {
    defaultProps: {
      trackColor: { false: Color.GREY_03, true: Color.RED_00 },
      ios_backgroundColor: Color.GREY_03,
      thumbColor: Color.GREY_LIGHT_03,
      size: Size.MD,
    },
    ':invalid': {
      borderColor: Color.RED_01,
      borderRadius: 12,
      borderWidth: 2,
    },
    variants: {
      size: {
        [Size.SM]: {
          transform: [{ scale: 0.55 }],
        },
        [Size.MD]: {
          transform: [{ scale: 0.7 }],
        },
        [Size.LG]: {
          transform: [{ scale: 0.95 }],
        },
      },
    },
  },
} satisfies ComponentTheme<SwitchProps, SwitchThemeVariants>;

export const Switch = merge(config.components.Switch, customSwitchConfig);
