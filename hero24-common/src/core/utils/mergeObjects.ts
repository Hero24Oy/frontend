import merge from 'lodash/merge';

export const mergeObjects = <ReturnType = Record<string, unknown>>(
  list: Record<string, unknown>[],
): ReturnType => list.reduce((acc, obj) => merge(acc, obj), {} as ReturnType);
