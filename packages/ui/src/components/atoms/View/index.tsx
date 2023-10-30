import { View as GluestackView } from '@gluestack-ui/themed';
import React, { FC, PropsWithChildren } from 'react';

import { LayoutStyles } from '$types';

type Props = PropsWithChildren<{
  style?: LayoutStyles;
}>;

export const View: FC<Props> = ({ children, style }) => (
  <GluestackView style={style}>{children}</GluestackView>
);
