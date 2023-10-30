import { FC } from 'react';
import { StyledInputTitle } from 'styled';

import { InputSize } from '../types';

type Props = {
  size?: `${InputSize}`;
  value?: string;
};

export const InputTitle: FC<Props> = (props) => {
  const { size, value } = props;

  if (!value) {
    return null;
  }

  return <StyledInputTitle size={size}>{value}</StyledInputTitle>;
};
