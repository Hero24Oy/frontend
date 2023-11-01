import { getDefaultHeaderHeight } from '@react-navigation/elements';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

import { Color } from '$theme';

export const useStyles = () => {
  const frame = useSafeAreaFrame();

  const statusBarHeight = useMemo(
    () => getDefaultHeaderHeight(frame, false, 0),
    [frame],
  );

  return StyleSheet.create({
    view: {
      borderBottomWidth: 0.2,
      borderColor: Color.GREY_LIGHT_02,
      marginTop: statusBarHeight,
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 74,
    },
    left: {
      justifyContent: 'flex-start',
    },
    right: {
      justifyContent: 'flex-end',
    },
    sides: {
      width: 107.5,
    },
  });
};
