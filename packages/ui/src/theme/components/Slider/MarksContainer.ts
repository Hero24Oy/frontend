import { SliderSize } from '$atoms/Slider/types';
import { ComponentTheme } from '$theme/types';

export const SliderMarksContainer = {
  theme: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 22,
    variants: {
      size: {
        [SliderSize.SM]: {
          paddingHorizontal: -8,
        },
        [SliderSize.MD]: {
          paddingHorizontal: -10,
        },
        [SliderSize.LG]: {
          paddingHorizontal: -12,
        },
      },
    },
    defaultProps: {
      size: SliderSize.SM,
    },
  },
} satisfies ComponentTheme<{ size: SliderSize }>;
