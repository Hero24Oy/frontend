import { ImageProps, ImageStyle } from 'react-native';

import { ImageSizeValues } from '$components/styled/Image/constants';
import { Size } from '$theme/constants';
import { ComponentTheme, SxValues } from '$theme/types';

export type ImageThemeVariants = {
  size: Record<ImageSizeValues, SxValues<ImageStyle>>;
};

export const Image = {
  theme: {
    maxWidth: '100%',
    variants: {
      size: {
        [Size.XXS]: {
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
        [Size.XXL]: {
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
} satisfies ComponentTheme<ImageProps, ImageThemeVariants>;
