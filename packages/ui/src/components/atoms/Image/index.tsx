import { Image as GluestackImage } from '@gluestack-ui/themed';
import { FC } from 'react';
import { ImageSourcePropType } from 'react-native';

import { ImageSize } from './enums';

import { CommonStyles } from '$types';

type Props = {
  source: ImageSourcePropType;
  size?: `${ImageSize}`;
  styles?: CommonStyles;
};

export const Image: FC<Props> = (props) => <GluestackImage {...props} />;

export * from './enums';
