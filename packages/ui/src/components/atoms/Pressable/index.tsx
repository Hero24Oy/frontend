import { Pressable as GluestackPressable } from '@gluestack-ui/themed';
import { ComponentProps, FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren &
  Pick<ComponentProps<typeof GluestackPressable>, 'onPress' | 'style'>;

export const Pressable: FC<Props> = (props) => {
  const { children, ...restProps } = props;

  return <GluestackPressable {...restProps}>{children}</GluestackPressable>;
};
