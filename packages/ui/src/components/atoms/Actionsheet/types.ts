import { Actionsheet } from '@gluestack-ui/themed';
import { FC } from 'react';
import { PressableProps } from 'react-native';

import { CommonStyles } from '$types';

export type Item = {
  text: string;
  Icon?: FC;
} & Pick<PressableProps, 'onPress'>;

export type GluestackActionsheetProps = CommonStyles &
  Pick<Parameters<typeof Actionsheet>[0], 'isOpen' | 'onOpen' | 'onClose'>;
