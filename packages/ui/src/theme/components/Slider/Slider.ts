import { SliderOrientation, SliderSize } from '$components/atoms/Slider/types';
import { Color } from '$theme/constants';
import { ComponentTheme } from '$theme/types';

export const Slider = {
  theme: {
    width: 4,
    borderRadius: 2,
    variants: {
      size: {
        [SliderSize.SM]: {
          height: 4,
          borderRadius: 2,
        },
        [SliderSize.MD]: {
          height: 5,
          borderRadius: 2.5,
        },
        [SliderSize.LG]: {
          height: 6,
          borderRadius: 3,
        },
      },
      orientation: {
        [SliderOrientation.VERTICAL]: {
          height: '100%',
          width: 24,
          alignItems: 'center',
        },
        [SliderOrientation.HORIZONTAL]: {
          backgroundColor: Color.GREY_LIGHT_01,
          width: '100%',
        },
      },
    },
    defaultProps: {
      size: SliderSize.SM,
      orientation: SliderOrientation.HORIZONTAL,
    },
  },
} satisfies ComponentTheme<{
  orientation: SliderOrientation;
  size: SliderSize;
}>;
