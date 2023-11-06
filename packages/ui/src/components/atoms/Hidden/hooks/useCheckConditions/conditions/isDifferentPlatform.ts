import { Platform } from 'react-native';

import { HiddenProps } from '$atoms';

type Platforms = HiddenProps['platforms'];

export const isDifferentPlatform = (platforms: Platforms): boolean => {
  return !platforms?.includes(Platform.OS);
};
