import { FC } from 'react';

import { areConditionsSatisfied } from './conditions';
import { HiddenProps } from './types';

export const Hidden: FC<HiddenProps> = (props) => {
  const { children, ...restProps } = props;

  if (!areConditionsSatisfied(restProps)) {
    return null;
  }

  return children;
};
