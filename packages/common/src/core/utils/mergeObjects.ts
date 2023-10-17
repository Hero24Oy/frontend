import merge from 'lodash/merge';

export const mergeObjects = <ReturnType = Record<string, unknown>>(
  list: Record<string, unknown>[],
): ReturnType => merge({}, ...list) as ReturnType;
