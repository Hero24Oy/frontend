import { ButtonText as ButtonTextOrigin } from '@gluestack-ui/themed';
import React from 'react';

export interface ButtonTextProps
  extends React.ComponentProps<typeof ButtonTextOrigin> {}

export const ButtonText: React.FC<ButtonTextProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- TODO remove this after add typing for children props in ButtonTextProps
  const { children, ...rest } = props;

  return <ButtonTextOrigin {...rest}>{children}</ButtonTextOrigin>;
};
