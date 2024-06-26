import { FC } from 'react';
import { FieldError } from 'react-hook-form';

import { StyledInputHelper } from '$styled';

type Props = {
  error?: FieldError;
};

export const InputHelper: FC<Props> = (props): JSX.Element => {
  const { error } = props;

  const errorText = error?.message || '';

  return <StyledInputHelper>{errorText}</StyledInputHelper>;
};
