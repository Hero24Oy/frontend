import * as AppleAuthentication from 'expo-apple-authentication';
import React, { FC } from 'react';
import { Platform, StyleSheet } from 'react-native';

import { useAppleAuth, useAuthentication } from '$common';

const styles = StyleSheet.create({
  appleButton: {
    height: 50,
  },
});

export const AppleAuth: FC = () => {
  const { signInWithCredentials } = useAuthentication();

  const { signInWithApple } = useAppleAuth({
    onAuthSucceed: signInWithCredentials,
  });

  if (Platform.OS !== 'ios') {
    return null;
  }

  return (
    <AppleAuthentication.AppleAuthenticationButton
      buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
      buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
      cornerRadius={5}
      style={styles.appleButton}
      onPress={(): void => {
        signInWithApple().catch((err) => console.error(err));
      }}
    />
  );
};
