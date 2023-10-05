import { Button as ButtonOrigin } from '@gluestack-ui/themed';
import React from 'react';

export interface ButtonProps
  extends React.ComponentProps<typeof ButtonOrigin> {}

export const Button: React.FC<ButtonProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { children, ...rest } = props;

  return <ButtonOrigin {...rest}>{children}</ButtonOrigin>;
};
