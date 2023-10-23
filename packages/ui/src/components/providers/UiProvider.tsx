import { config, GluestackUIProvider } from '@gluestack-ui/themed';
import React, { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

export const UiProvider: FC<Props> = (props) => {
  const { children } = props;

  return (
    <GluestackUIProvider config={config.theme}>{children}</GluestackUIProvider>
  );
};
