import { Pressable } from '@gluestack-ui/themed';
import { ComponentProps, PropsWithChildren } from 'react';

type GluestackPressableProps = Pick<
  ComponentProps<typeof Pressable>,
  'onPress' | 'style'
>;

export type PressableProps = PropsWithChildren & GluestackPressableProps;
