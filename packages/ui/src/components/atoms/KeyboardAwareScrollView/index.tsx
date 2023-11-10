import { FC } from 'react';
import { StyleSheet } from 'react-native';
import { KeyboardAwareScrollView as RnKeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { KeyboardAwareScrollViewProps } from './types';

export const KeyboardAwareScrollView: FC<KeyboardAwareScrollViewProps> = (
  props,
) => {
  const { children, ...restProps } = props;

  return (
    <RnKeyboardAwareScrollView
      enableAutomaticScroll
      enableOnAndroid
      keyboardShouldPersistTaps="handled"
      style={styles.main}
      {...restProps}
    >
      {children}
    </RnKeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  main: { flexGrow: 1 },
});

export * from './types';
