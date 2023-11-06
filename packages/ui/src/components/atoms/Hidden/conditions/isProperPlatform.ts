import { Platform } from 'react-native';

import { HiddenProps } from '../types';

type Platforms = HiddenProps['platforms'] | undefined;

export const isProperPlatform = (platforms: Platforms): boolean => {
  return !platforms?.includes(Platform.OS);
};
