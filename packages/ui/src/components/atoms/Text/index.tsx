import { Text as GluestackText } from '@gluestack-ui/themed';
import React, { FC } from 'react';

type Props = {
  children: string;
};

export const Text: FC<Props> = (props) => {
  const { children } = props;

  return <GluestackText>{children}</GluestackText>;
};
