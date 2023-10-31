import { Actionsheet } from '@gluestack-ui/themed';
import { PressableProps } from 'react-native';

import { BaseIcon } from '$icons/base';
import { CommonStyles } from '$types';

export type Item = {
  text: string;
  Icon?: BaseIcon;
} & Pick<PressableProps, 'onPress'>;

type ActionSheetProps = Parameters<typeof Actionsheet>[0];

export type GluestackActionsheetProps = CommonStyles &
  Pick<ActionSheetProps, 'isOpen' | 'onOpen' | 'onClose'>;
