import { InputField as InputFieldOrigin } from '@gluestack-ui/themed';
import React from 'react';

export interface InputFieldProps
  extends React.ComponentProps<typeof InputFieldOrigin> {}

export const InputField: React.FC<InputFieldProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- TODO remove this after add typing for children props in InputField
  const { children, ...rest } = props;

  return <InputFieldOrigin {...rest}>{children}</InputFieldOrigin>;
};
