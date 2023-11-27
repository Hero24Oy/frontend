import { Dimensions } from 'react-native';

const ONE_HUNDRED_PERCENT = 100;

export const getWidthInPercent = (
  padding: number = 0,
  gap: number = 0,
  divisor: number = 2,
): number => {
  const screenWidth = Dimensions.get('screen').width;

  const sumOfGaps = (divisor - 1) * gap;

  const width = (screenWidth - padding - sumOfGaps) / divisor;

  const widthInPercent =
    (width / (screenWidth - padding)) * ONE_HUNDRED_PERCENT;

  return widthInPercent;
};
