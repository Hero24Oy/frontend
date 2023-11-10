import { FC } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

import { ExpoStack } from '@hero24/common';

const ConfirmationCodeLayout: FC = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ExpoStack title="Confirmation" />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ConfirmationCodeLayout;
