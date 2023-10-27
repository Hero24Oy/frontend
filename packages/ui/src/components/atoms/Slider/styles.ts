import { StyleSheet, ViewStyle } from 'react-native';

import { OuterMarksStylesKeys } from './types';

export const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    alignItems: 'center',
  },
  sliderContainer: {
    width: '100%',
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  marksContainer: {
    width: '100%',
    justifyContent: 'space-between',
    padding: 4,
  },
  mark: {
    flex: 1,
    width: 'auto',
    justifyContent: 'center',
  },
});

export const getOuterMarksStyles = (
  padding: number,
): Record<OuterMarksStylesKeys, ViewStyle> =>
  StyleSheet.create({
    leftMark: {
      marginRight: -padding,
      justifyContent: 'flex-start',
    },
    rightMark: {
      marginLeft: -padding,
      justifyContent: 'flex-end',
    },
  });
