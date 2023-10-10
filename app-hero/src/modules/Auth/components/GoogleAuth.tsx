import { Button, ButtonText } from '@gluestack-ui/themed';
import React, { FC } from 'react';

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

  return (
    <Button
      onPress={(): void => {
        signInWithGoogle().catch((err) => console.error(err));
      }}
    >
      <ButtonText>Sign in google</ButtonText>
    </Button>
  );
};
