import { ViewProps, ViewStyle } from 'react-native';

import { SliderOrientation, SliderSize } from '$atoms/Slider/types';
import { Color, Size } from '$theme/constants';
import { ComponentTheme, SxValues } from '$theme/types';

export type SliderTrackThemeVariants = {
  orientation: Record<SliderOrientation, SxValues<ViewStyle>>;
  size: Record<SliderSize, SxValues<ViewStyle>>;
};

export const SliderTrack = {
  theme: {
    backgroundColor: Color.GREY_LIGHT_01,
    variants: {
      size: {
        [Size.SM]: {
          height: 4,
          width: 4,
          borderRadius: 2,
        },
        [Size.MD]: {
          height: 5,
          width: 5,
          borderRadius: 2.5,
        },
        [Size.LG]: {
          height: 6,
          width: 6,
          borderRadius: 3,
        },
      },
      orientation: {
        [SliderOrientation.VERTICAL]: {
          height: '100%',
          flexDirection: 'column-reverse',
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
} satisfies ComponentTheme<ViewProps, SliderTrackThemeVariants>;
