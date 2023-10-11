import * as AppleAuthentication from 'expo-apple-authentication';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import { useAppleAuth, useAuthentication } from '$common';

export const AppleAuth: FC = () => {
  const { signInWithCredentials } = useAuthentication();

  const { signInWithApple } = useAppleAuth({
    onAuthSucceed: signInWithCredentials,
  });

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

const styles = StyleSheet.create({
  appleButton: {
    height: 50,
  },
});
