import { HiddenProps } from '../types';

import { haveProperPlatform } from './haveProperPlatform';

type IsConditionsSatisfiedArgs = Omit<HiddenProps, 'children'>;

export const areConditionsSatisfied = (
  args: IsConditionsSatisfiedArgs,
): boolean => {
  const { platforms } = args;

  const conditions = [haveProperPlatform(platforms)] satisfies boolean[];

  return conditions.every((condition) => condition);
};
