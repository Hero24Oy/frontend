import { Pressable as GluestackPressable } from '@gluestack-ui/themed';
import { ComponentProps, FC } from 'react';

type Props = Pick<
  ComponentProps<typeof GluestackPressable>,
  'onPress' | 'style' | 'children'
>;

export const Pressable: FC<Props> = ({ children, ...restProps }) => {
  return <GluestackPressable {...restProps}>{children}</GluestackPressable>;
};
