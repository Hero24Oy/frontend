import React, { FC, PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { KeyboardAwareScrollView as RnKeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const KeyboardAwareScrollView: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <RnKeyboardAwareScrollView
      style={styles.view}
      contentContainerStyle={styles.container}
    >
      {children}
    </RnKeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
  },
});
