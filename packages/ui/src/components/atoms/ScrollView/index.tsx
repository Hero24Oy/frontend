import { ScrollView as GluestackScrollView } from '@gluestack-ui/themed';
import { FC, PropsWithChildren } from 'react';

import { LayoutStyles } from '$types';

type Props = PropsWithChildren<{
  style?: LayoutStyles;
}>;

export const ScrollView: FC<Props> = ({ children, style }) => (
  <GluestackScrollView style={style}>{children}</GluestackScrollView>
);
