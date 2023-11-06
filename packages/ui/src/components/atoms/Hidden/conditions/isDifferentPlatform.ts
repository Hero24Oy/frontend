import { Platform } from 'react-native';

import { HiddenProps } from '../types';

type Platforms = HiddenProps['platforms'];

export const isDifferentPlatform = (platforms: Platforms): boolean => {
  return !platforms?.includes(Platform.OS);
};
