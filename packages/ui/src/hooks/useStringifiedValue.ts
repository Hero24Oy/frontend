import isString from 'lodash/isString';
import { useMemo } from 'react';

type ReturnType = {
  stringifiedValue: string;
};

export const useStringifiedValue = (incoming: unknown): ReturnType => {
  const value: string = useMemo(
    () => (isString(incoming) ? incoming : JSON.stringify(incoming)),
    [],
  );

  return { stringifiedValue: value };
};
