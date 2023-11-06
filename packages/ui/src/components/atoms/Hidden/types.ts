import { PropsWithChildren } from 'react';
import { Platform } from 'react-native';

export type HiddenProps = PropsWithChildren<{
  platforms?: Array<`${Platform['OS']}`>;
}>;
