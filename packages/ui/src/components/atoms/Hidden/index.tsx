import { FC } from 'react';

import { isConditionsSatisfied } from './conditions';
import { HiddenProps } from './types';

export const Hidden: FC<HiddenProps> = (props) => {
  const { children, ...restProps } = props;

  if (!isConditionsSatisfied(restProps)) {
    return null;
  }

  return children;
};
