import { MarkItems, ValuesBasedProps } from '../types';

type Params = Required<Omit<ValuesBasedProps, 'marks'>>;

export const getMarksFromRange = (params: Params): MarkItems => {
  const { minValue, maxValue, step } = params;
  const marksCount = (maxValue - minValue) / step + 1;

  return new Array(marksCount).fill(0).map((_item, index) => {
    const value = minValue + index * step;

    return {
      label: value.toString(),
      value,
    };
  });
};
