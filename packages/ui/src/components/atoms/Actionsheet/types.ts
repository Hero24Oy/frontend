import { Actionsheet } from '@gluestack-ui/themed';
import { FC } from 'react';
import { PressableProps } from 'react-native';

import { CommonStyles } from '$types';

export type Item = {
  text: string;
  Icon?: FC;
} & Pick<PressableProps, 'onPress'>;

type ActionSheetProps = Parameters<typeof Actionsheet>[0];

export type GluestackActionsheetProps = CommonStyles &
  Pick<ActionSheetProps, 'isOpen' | 'onOpen' | 'onClose'>;
