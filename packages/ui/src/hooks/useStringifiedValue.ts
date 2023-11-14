import { useMemo } from 'react';

type ReturnType = {
  stringifiedValue: string;
};

export const useStringifiedValue = <Type>(value: Type): ReturnType => {
  const stringifiedValue = useMemo(() => JSON.stringify(value), []);

  return {
    stringifiedValue,
  };
};
