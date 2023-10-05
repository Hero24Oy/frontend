import { Text as TextOrigin } from '@gluestack-ui/themed';
import React from 'react';

export interface TextProps extends React.ComponentProps<typeof TextOrigin> {}

export const Text: React.FC<TextProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { children, ...rest } = props;

  return <TextOrigin {...rest}>{children}</TextOrigin>;
};
