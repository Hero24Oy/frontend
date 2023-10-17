import { Button, ButtonText } from '@gluestack-ui/themed';
import React, { FC } from 'react';

import { useAuthentication, useGoogleAuth } from '@hero24/common';

import { authConfig } from '$configs';

export const GoogleAuth: FC = () => {
  const { signInWithCredentials } = useAuthentication();

  // TODO usage is similar for all the password-less providers, so we can extract it to a factory hook
  const { signInWithGoogle } = useGoogleAuth({
    onAuthSucceed: signInWithCredentials,
    androidClientId: authConfig.androidClientId,
    iosClientId: authConfig.iosClientId,
    webClientId: authConfig.webClientId,
  });

  const signInHandler = async (): Promise<void> => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button onPress={signInHandler}>
      <ButtonText>Sign in google</ButtonText>
    </Button>
  );
};
