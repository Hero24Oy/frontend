import { Actionsheet } from '@gluestack-ui/themed';
import { FC } from 'react';
import { PressableProps } from 'react-native';

export type Item = {
  text: string;
  Icon?: FC;
} & Pick<PressableProps, 'onPress'>;

export type GluestackActionsheetProps = Parameters<typeof Actionsheet>[0];
