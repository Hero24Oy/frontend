import { ImageSize } from '$components/atoms/Image/constants';
import { ComponentTheme } from '$theme/types';

export const Image = {
  theme: {
    maxWidth: '100%',
    variants: {
      size: {
        [ImageSize.XXS]: {
          width: 6,
          height: 6,
        },
        [ImageSize.XS]: {
          width: 10,
          height: 10,
        },
        [ImageSize.SM]: {
          width: 16,
          height: 16,
        },
        [ImageSize.MD]: {
          width: 20,
          height: 20,
        },
        [ImageSize.LG]: {
          width: 24,
          height: 24,
        },
        [ImageSize.XL]: {
          width: 32,
          height: 32,
        },
        [ImageSize.XXL]: {
          width: 64,
          height: 64,
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
