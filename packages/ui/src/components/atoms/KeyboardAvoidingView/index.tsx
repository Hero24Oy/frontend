import { FC, PropsWithChildren } from 'react';
import {
  KeyboardAvoidingView as RnKeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
