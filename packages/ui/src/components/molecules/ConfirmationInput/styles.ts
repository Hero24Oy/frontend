import { StyleSheet } from 'react-native';

import { Color } from '$theme';

export const styles = StyleSheet.create({
  root: {
    gap: 8,
    justifyContent: 'center',
  },
  cellOnFocus: {
    borderColor: Color.BLACK_00,
  },
});
