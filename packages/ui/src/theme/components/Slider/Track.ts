import { SliderOrientation, SliderSize } from '$components/atoms/Slider/types';
import { Color } from '$theme/constants';
import { ComponentTheme } from '$theme/types';

export const SliderTrack = {
  theme: {
    backgroundColor: Color.GREY_LIGHT_01,
    variants: {
      size: {
        [SliderSize.SM]: {
          height: 4,
          width: 4,
          borderRadius: 2,
        },
        [SliderSize.MD]: {
          height: 5,
          width: 5,
          borderRadius: 2.5,
        },
        [SliderSize.LG]: {
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
      size: SliderSize.SM,
      orientation: SliderOrientation.HORIZONTAL,
    },
  },
} satisfies ComponentTheme<{
  orientation: SliderOrientation;
  size: SliderSize;
}>;
