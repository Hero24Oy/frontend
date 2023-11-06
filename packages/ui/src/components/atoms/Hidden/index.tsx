import { FC } from 'react';

import { useCheckConditions } from './hooks';
import { HiddenProps } from './types';

export const Hidden: FC<HiddenProps> = (props) => {
  const { children, ...restProps } = props;

  const { areConditionsSatisfied } = useCheckConditions(restProps);

  if (!areConditionsSatisfied) {
    return null;
  }

  return children;
};

export * from './types';
