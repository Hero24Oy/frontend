import { Button, ButtonText } from '@gluestack-ui/themed';
import React, { FC, useCallback } from 'react';

import { useAuthentication, useGoogleAuth } from '$common';
import { authConfig } from '$configs';

export const GoogleAuth: FC = () => {
  const { signInWithCredentials } = useAuthentication();

  const { signInWithGoogle } = useGoogleAuth({
    onAuthSucceed: signInWithCredentials,
    androidClientId: authConfig.androidClientId,
    iosClientId: authConfig.iosClientId,
    webClientId: authConfig.webClientId,
  });

  const signInHandler = useCallback(async (): Promise<void> => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error(error);
    }
  }, [signInWithGoogle]);

  return (
    <Button onPress={signInHandler}>
      <ButtonText>Sign in google</ButtonText>
    </Button>
  );
};
