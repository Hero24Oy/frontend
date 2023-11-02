import { StyleSheet, ViewStyle } from 'react-native';

import { SliderMarkArrangement } from '../types';

export const getMarkStyle = (
  width: number,
): Record<`${SliderMarkArrangement}`, ViewStyle> => {
  return StyleSheet.create({
    [SliderMarkArrangement.FIRST]: {
      flex: 1,
      textAlign: 'left',
    },
    [SliderMarkArrangement.LAST]: {
      flex: 1,
      textAlign: 'right',
    },
    [SliderMarkArrangement.INNER]: {
      width,
      textAlign: 'center',
    },
  });
};
