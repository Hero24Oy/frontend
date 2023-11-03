import { ViewProps, ViewStyle } from 'react-native';

import { SliderSize } from '$atoms/Slider/types';
import { Color, Size } from '$theme/constants';
import { ComponentTheme, SxValues } from '$theme/types';

export type SliderThumbThemeVariants = {
  size: Record<SliderSize, SxValues<ViewStyle>>;
};

export const SliderThumb = {
  theme: {
    borderRadius: 12,
    shadowColor: Color.DARK_00,
    position: 'absolute',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 2, height: -2 },
    backgroundColor: Color.RED_00,
    ':active': {
      backgroundColor: Color.RED_00,
      borderColor: Color.RED_02,
      borderWidth: 4,
    },
    ':disabled': {
      backgroundColor: Color.GREY_03,
    },
    variants: {
      size: {
        [Size.SM]: {
          height: 16,
          width: 16,
        },
        [Size.MD]: {
          height: 20,
          width: 20,
        },
        [Size.LG]: {
          height: 24,
          width: 24,
        },
      },
    },
    defaultProps: {
      size: Size.SM,
    },
  },
} satisfies ComponentTheme<ViewProps, SliderThumbThemeVariants>;
