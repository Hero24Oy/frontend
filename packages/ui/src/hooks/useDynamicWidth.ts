import { useMemo } from 'react';
import { Dimensions } from 'react-native';

type Params = {
  divisor?: number;
  externalPaddingsSum?: number;
  gap?: number;
};

export const useDynamicWidth = (params: Params) => {
  const { divisor = 2, externalPaddingsSum = 0, gap = 0 } = params;

  const dynamicWidth = useMemo(() => {
    const screenWidth = Dimensions.get('screen').width;
    const sumOfGaps = (divisor - 1) * gap;
    const width = (screenWidth - externalPaddingsSum - sumOfGaps) / divisor;

    return width;
  }, [divisor, externalPaddingsSum, gap]);

  return { dynamicWidth };
};
