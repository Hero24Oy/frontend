import { View as GluestackView } from '@gluestack-ui/themed';
import React, { FC, PropsWithChildren } from 'react';
import { LayoutStyles } from 'types';

interface Props extends PropsWithChildren {
  style?: LayoutStyles;
}

export const View: FC<Props> = (props) => {
  const { children, style = null } = props;

  return <GluestackView style={style}>{children}</GluestackView>;
};
