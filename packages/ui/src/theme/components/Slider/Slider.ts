import { SliderOrientation, SliderSize } from '$atoms/Slider/types';
import { Size } from '$theme/enums';
import { ComponentTheme } from '$theme/types';

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
} satisfies ComponentTheme<{
  orientation: SliderOrientation;
  size: SliderSize;
}>;
