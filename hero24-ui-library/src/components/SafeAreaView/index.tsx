import React, { PropsWithChildren } from 'react';
import { SafeAreaView as SafeAreaViewNative, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export interface SafeAreaViewProps extends PropsWithChildren {}

export const SafeAreaView: React.FC<SafeAreaViewProps> = (props) => {
  const { children } = props;

  return (
    <SafeAreaViewNative style={styles.view}>
      <KeyboardAwareScrollView
        style={styles.keyboardAware}
        contentContainerStyle={styles.keyboardAwareContainer}
      >
        {children}
      </KeyboardAwareScrollView>
    </SafeAreaViewNative>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  keyboardAware: {
    flexGrow: 1,
  },
  keyboardAwareContainer: {
    flexGrow: 1,
  },
});
