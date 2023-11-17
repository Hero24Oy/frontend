import { FC, PropsWithChildren } from 'react';
import {
  KeyboardAvoidingView as RnKeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';

export const KeyboardAvoidingView: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const keyboardAvoidingBehavior = Platform.OS === 'ios' ? 'padding' : 'height';

  return (
    <RnKeyboardAvoidingView
      behavior={keyboardAvoidingBehavior}
      style={styles.container}
    >
      {children}
    </RnKeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
