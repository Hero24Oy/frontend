import { HiddenProps } from '../types';

import { hasProperPlatform } from './hasProperPlatform';

type IsConditionsSatisfiedArgs = Omit<HiddenProps, 'children'>;

export const areConditionsSatisfied = (
  args: IsConditionsSatisfiedArgs,
): boolean => {
  const { platforms } = args;

  const conditions = [hasProperPlatform(platforms)] satisfies boolean[];

  return conditions.every((condition) => condition);
};
