import { useCallback } from 'react';

import { RadioOption } from '$atoms';

type Params<Value> = {
  hasDivider: boolean;
  options: RadioOption<Value>[];
};

export const useLogic = <Value>(params: Params<Value>) => {
  const { hasDivider, options } = params;

  const isDividerVisible = useCallback(
    (index: number) => {
      return hasDivider && index !== options.length - 1;
    },
    [options, hasDivider],
  );

  return {
    isDividerVisible,
  };
};
