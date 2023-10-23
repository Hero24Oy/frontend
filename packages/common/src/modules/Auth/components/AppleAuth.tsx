import * as AppleAuthentication from 'expo-apple-authentication';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import { useAppleAuth, useAuthentication } from '../hooks';

export const AppleAuth: FC = () => {
  const { signInWithCredentials } = useAuthentication();

  const { signInWithApple } = useAppleAuth({
    onAuthSucceed: signInWithCredentials,
  });

  const signInHandler = async (): Promise<void> => {
    try {
      await signInWithApple();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppleAuthentication.AppleAuthenticationButton
      buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
      buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
      cornerRadius={5}
      style={styles.appleButton}
      onPress={signInHandler}
    />
  );
};

const styles = StyleSheet.create({
  appleButton: {
    height: 50,
  },
});
