import { VStack as GluestackVStack } from '@gluestack-ui/themed';
import { FC, PropsWithChildren } from 'react';

import { LayoutStyles } from '$types';

interface Props extends PropsWithChildren {
  style?: LayoutStyles;
}

export const VStack: FC<Props> = (props) => {
  const { children, style } = props;

  return <GluestackVStack style={style}>{children}</GluestackVStack>;
};
