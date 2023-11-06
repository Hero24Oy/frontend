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

  const conditionsChecks = [isDifferentPlatform(platforms)];

  const areConditionsSatisfied = useMemo(
    () =>
      conditionsChecks.every((isConditionSatisfied) => isConditionSatisfied),
    [conditionsChecks],
  );

  return {
    areConditionsSatisfied,
  };
};
