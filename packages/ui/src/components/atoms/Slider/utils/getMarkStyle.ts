import { StyleSheet, ViewStyle } from 'react-native';

import { MarkArrangement } from '../types';

export const getMarkStyle = (
  width: number,
): Record<`${MarkArrangement}`, ViewStyle> => {
  return StyleSheet.create({
    [MarkArrangement.FIRST]: {
      flex: 1,
      textAlign: 'left',
    },
    [MarkArrangement.LAST]: {
      flex: 1,
      textAlign: 'right',
    },
    [MarkArrangement.INNER]: {
      width,
      textAlign: 'center',
    },
  });
};
