import { Dimensions } from 'react-native';

const ONE_HUNDRED_PERCENT = 100;

export const getWidthInPercent = (
  padding: number,
  gap: number,
  numberOfColumns: number = 2,
): number => {
  const screenWidth = Dimensions.get('screen').width;

  const sumOfGaps = (numberOfColumns - 1) * gap;

  const width = (screenWidth - padding - sumOfGaps) / numberOfColumns;

  const widthInPercent =
    (width / (screenWidth - padding)) * ONE_HUNDRED_PERCENT;

  return widthInPercent;
};
