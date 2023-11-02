import { config } from '@gluestack-ui/config';
import { merge } from 'lodash';

import { SliderOrientation, SliderSize } from '$components/atoms/Slider/types';
import { Color } from '$theme/constants';
import { ComponentTheme } from '$theme/types';

const SliderThumbTheme = {
  theme: {
    borderRadius: 12,
    shadowColor: Color.DARK_00,
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
        [SliderSize.SM]: {
          height: 16,
          width: 16,
          bottom: -6,
        },
        [SliderSize.MD]: {
          height: 20,
          width: 20,
          bottom: -7.5,
        },
        [SliderSize.LG]: {
          height: 24,
          width: 24,
          bottom: -9,
        },
      },
      orientation: {
        [SliderOrientation.VERTICAL]: {
          position: 'absolute',
        },
        [SliderOrientation.HORIZONTAL]: {},
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

export const SliderThumb = merge(
  config.components.SliderThumb,
  SliderThumbTheme,
);
