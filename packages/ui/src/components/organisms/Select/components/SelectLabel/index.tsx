import { FC } from 'react';

import { StyledSelectLabel } from '$components/styled';

type Props = {
  label?: string;
};

export const SelectLabel: FC<Props> = ({ label }) => {
  if (!label) {
    return null;
  }

  return <StyledSelectLabel>{label}</StyledSelectLabel>;
};
