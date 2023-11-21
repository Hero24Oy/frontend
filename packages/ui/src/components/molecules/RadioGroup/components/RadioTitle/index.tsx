import { FC } from 'react';

import { StyledRadioTitle } from '$styled';

type Props = {
  value?: string;
};

export const RadioTitle: FC<Props> = ({ value }) => {
  if (!value) {
    return null;
  }

  return <StyledRadioTitle>{value}</StyledRadioTitle>;
};
