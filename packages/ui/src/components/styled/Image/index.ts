import { styled } from '@gluestack-style/react';
import { SxProps } from '@gluestack-style/react/lib/typescript/types';
import { Image as ExpoImage, ImageProps } from 'expo-image';
import { StyleProp, ViewStyle } from 'react-native';

import { ImageSize } from './constants';

type Variants = {
  size: Record<ImageSize, Partial<SxProps<StyleProp<ViewStyle>>>>;
};

export const StyledImage = styled<ImageProps, Variants, string>(
  ExpoImage,
  {},
  { componentName: 'Image' },
);
