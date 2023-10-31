import { FC } from 'react';
import { FieldError } from 'react-hook-form';

import { StyledInputHelper, StyledInputHelperBlank } from '$styled';

type Props = {
  error?: FieldError;
};

export const InputHelper: FC<Props> = (props): JSX.Element => {
  const { error } = props;

  if (!error) {
    return <StyledInputHelperBlank />;
  }

  const errorText = error?.message?.toString() || '';

  return <StyledInputHelper>{errorText}</StyledInputHelper>;
};
