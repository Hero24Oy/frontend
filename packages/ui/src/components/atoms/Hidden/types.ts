import { PropsWithChildren } from 'react';
import { Platform } from 'react-native';

export type HiddenProps = PropsWithChildren<{
  platforms?: `${Platform['OS']}`[];
}>;
