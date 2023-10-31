import { FC } from 'react';

import { InputSize } from '../types';

import { StyledInputTitle } from '$styled';

type Props = {
  size?: `${InputSize}`;
  value?: string;
};

export const InputTitle: FC<Props> = (props) => {
  const { value, ...restProps } = props;

  if (!value) {
    return null;
  }

  return <StyledInputTitle {...restProps}>{value}</StyledInputTitle>;
};
