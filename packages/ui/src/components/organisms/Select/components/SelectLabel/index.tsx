import { FC } from 'react';

import { StyledSelectLabel } from '$components/styled';

type Props = {
  label?: string;
};

export const SelectLabel: FC<Props> = (props) => {
  const { label } = props;

  if (!label) {
    return null;
  }

  return <StyledSelectLabel>{label}</StyledSelectLabel>;
};
