import { Pressable as GluestackPressable } from '@gluestack-ui/themed';
import { FC } from 'react';
import { PressableProps } from 'react-native';

export const Pressable: FC<PressableProps> = (props) => {
  const { children, ...restProps } = props;

  return <GluestackPressable {...restProps}>{children}</GluestackPressable>;
};
