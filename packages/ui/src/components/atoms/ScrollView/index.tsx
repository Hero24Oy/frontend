import { ScrollView as GluestackScrollView } from '@gluestack-ui/themed';
import { FC, PropsWithChildren } from 'react';

import { LayoutStyles } from '$types';

type Props = PropsWithChildren<{
  style?: LayoutStyles;
}>;

export const ScrollView: FC<Props> = (props) => {
  const { children, style } = props;

  return <GluestackScrollView style={style}>{children}</GluestackScrollView>;
};
