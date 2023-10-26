import { FC } from 'react';
import { PressableProps } from 'react-native';

export type Item = {
  text: string;
  Icon?: FC;
} & Pick<PressableProps, 'onPress'>;
