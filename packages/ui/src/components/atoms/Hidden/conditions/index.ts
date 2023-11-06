import { HiddenProps } from '../types';

import { isDifferentPlatform } from './isDifferentPlatform';

type IsConditionsSatisfiedArgs = Omit<HiddenProps, 'children'>;

export const areConditionsSatisfied = (
  args: IsConditionsSatisfiedArgs,
): boolean => {
  const { platforms } = args;

  const conditions = [isDifferentPlatform(platforms)];

  return conditions.every((condition) => condition);
};
