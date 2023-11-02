import { ImageSize } from '$components/styled/Image/constants';
import { Size } from '$theme/constants';
import { ComponentTheme } from '$theme/types';

export const Image = {
  theme: {
    maxWidth: '100%',
    variants: {
      size: {
        [Size['2XS']]: {
          width: 24,
          height: 24,
        },
        [Size.XS]: {
          width: 40,
          height: 40,
        },
        [Size.SM]: {
          width: 64,
          height: 64,
        },
        [Size.MD]: {
          width: 80,
          height: 80,
        },
        [Size.LG]: {
          width: 96,
          height: 96,
        },
        [Size.XL]: {
          width: 128,
          height: 128,
        },
        [Size['2XL']]: {
          width: 256,
          height: 256,
        },
        [Size.FULL]: {
          width: '100%',
          height: '100%',
        },
      },
    },
    defaultProps: {
      size: Size.FULL,
    },
  },
} satisfies ComponentTheme<{ size: ImageSize }>;
