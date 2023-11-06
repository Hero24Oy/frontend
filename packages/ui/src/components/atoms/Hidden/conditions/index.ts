import { HiddenProps } from '../types';

import { isDifferentPlatform } from './isDifferentPlatform';

type AreConditionsSatisfiedArgs = Omit<HiddenProps, 'children'>;

export const areConditionsSatisfied = (
  args: AreConditionsSatisfiedArgs,
): boolean => {
  const { platforms } = args;

  const conditions = [isDifferentPlatform(platforms)];

  return conditions.every((condition) => condition);
};
