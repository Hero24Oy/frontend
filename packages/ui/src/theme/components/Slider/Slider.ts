import { ViewProps, ViewStyle } from 'react-native';

import { SliderOrientation, SliderSize } from '$atoms/Slider/types';
import { Size } from '$theme/constants';
import { ComponentTheme, SxValues } from '$theme/types';

export type SliderThemeVariants = {
  orientation: Record<SliderOrientation, SxValues<ViewStyle>>;
  size: Record<SliderSize, SxValues<ViewStyle>>;
};

export const Slider = {
  theme: {
    justifyContent: 'center',
    alignItems: 'center',
    variants: {
      size: {
        [Size.SM]: {
          height: 16,
        },
        [Size.MD]: {
          height: 20,
        },
        [Size.LG]: {
          height: 24,
        },
      },
      orientation: {
        [SliderOrientation.VERTICAL]: {
          height: '100%',
        },
        [SliderOrientation.HORIZONTAL]: {
          width: '100%',
        },
      },
    },
    defaultProps: {
      size: Size.SM,
      orientation: SliderOrientation.HORIZONTAL,
    },
  },
} satisfies ComponentTheme<ViewProps, SliderThemeVariants>;
