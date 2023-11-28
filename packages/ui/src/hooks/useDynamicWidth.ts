import { useMemo } from 'react';
import { Dimensions } from 'react-native';

type Params = {
  externalPaddingsSum: number;
  gap: number;
  numberOfColumns: number;
};

export const useDynamicWidth = (params: Params) => {
  const { numberOfColumns, externalPaddingsSum, gap } = params;

  const dynamicWidth = useMemo(() => {
    const screenWidth = Dimensions.get('screen').width;
    const sumOfGaps = (numberOfColumns - 1) * gap;

    const width =
      (screenWidth - externalPaddingsSum - sumOfGaps) / numberOfColumns;

    return width;
  }, [numberOfColumns, externalPaddingsSum, gap]);

  return { dynamicWidth };
};
