import { useMemo } from 'react';

import { HiddenProps } from '../../types';

import { isDifferentPlatform } from './conditions';

type UseCheckConditionsArgs = Omit<HiddenProps, 'children'>;

type UseCheckConditionsReturnType = {
  areConditionsSatisfied: boolean;
};

export const useCheckConditions = (
  args: UseCheckConditionsArgs,
): UseCheckConditionsReturnType => {
  const { platforms } = args;

  const conditions = [isDifferentPlatform(platforms)];

  const areConditionsSatisfied = useMemo(
    () => conditions.every((condition) => condition),
    [conditions],
  );

  return {
    areConditionsSatisfied,
  };
};
