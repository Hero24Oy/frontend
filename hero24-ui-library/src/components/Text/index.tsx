import { Text as TextOrigin } from '@gluestack-ui/themed';
import React from 'react';

export interface TextProps {
  children: string;
}

export const Text: React.FC<TextProps> = (props) => {
  const { children } = props;

  return <TextOrigin>{children}</TextOrigin>;
};
