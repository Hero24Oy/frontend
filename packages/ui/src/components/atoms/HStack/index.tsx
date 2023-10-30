import { HStack as GluestackHStack } from '@gluestack-ui/themed';
import { FC, PropsWithChildren } from 'react';

import { LayoutStyles } from '../../../types';

interface Props extends PropsWithChildren {
  style?: LayoutStyles;
}

export const HStack: FC<Props> = (props) => {
  const { children, style } = props;

  return <GluestackHStack style={style}>{children}</GluestackHStack>;
};
