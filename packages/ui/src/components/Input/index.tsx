import { Input as InputOrigin } from '@gluestack-ui/themed';
import React from 'react';

export interface InputProps extends React.ComponentProps<typeof InputOrigin> {}

export const Input: React.FC<InputProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- TODO remove this after add typing for children props in InputProps
  const { children, ...rest } = props;

  return <InputOrigin {...rest}>{children}</InputOrigin>;
};
