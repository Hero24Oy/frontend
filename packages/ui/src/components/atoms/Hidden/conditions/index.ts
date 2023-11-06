import { HiddenProps } from '../types';

import { isProperPlatform } from './isProperPlatform';

type IsConditionsSatisfiedArgs = Omit<HiddenProps, 'children'>;

export const isConditionsSatisfied = (
  args: IsConditionsSatisfiedArgs,
): boolean => {
  const { platforms } = args;

  const conditions = [isProperPlatform(platforms)] satisfies boolean[];

  return conditions.every((condition) => condition);
};
