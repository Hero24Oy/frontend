import { FC, PropsWithChildren } from 'react';
import {
  KeyboardAvoidingView as RnKeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const KeyboardAvoidingView: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <RnKeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {children}
    </RnKeyboardAvoidingView>
  );
};
