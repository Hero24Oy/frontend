import React, { PropsWithChildren } from 'react';
import { SafeAreaView as SafeAreaViewNative, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export interface SafeAreaViewProps extends PropsWithChildren {}

export const SafeAreaView: React.FC<SafeAreaViewProps> = (props) => {
  const { children } = props;

  return (
    <SafeAreaViewNative style={styles.view}>
      <KeyboardAwareScrollView
        style={{ flexGrow: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
        }}
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
});
