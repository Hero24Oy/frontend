import { ImageSize } from '$components/atoms/Image/constants';
import { ComponentTheme } from '$theme/types';

export const Image = {
  theme: {
    maxWidth: '100%',
    variants: {
      size: {
        [ImageSize.XXS]: {
          width: 24,
          height: 24,
        },
        [ImageSize.XS]: {
          width: 40,
          height: 40,
        },
        [ImageSize.SM]: {
          width: 64,
          height: 64,
        },
        [ImageSize.MD]: {
          width: 80,
          height: 80,
        },
        [ImageSize.LG]: {
          width: 96,
          height: 96,
        },
        [ImageSize.XL]: {
          width: 128,
          height: 128,
        },
        [ImageSize.XXL]: {
          width: 256,
          height: 256,
        },
        [ImageSize.FULL]: {
          width: '100%',
          height: '100%',
        },
      },
    },
    defaultProps: {
      size: ImageSize.FULL,
    },
  },
} satisfies ComponentTheme<{ size: ImageSize }>;
