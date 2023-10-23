import React, { FC } from 'react';

import { Button } from '@hero24/ui';

import { useAuthentication, useGoogleAuth } from '../hooks';
import { GoogleAuthConfig } from '../types';

interface Props {
  authConfig: GoogleAuthConfig;
}

export const GoogleAuth: FC<Props> = (props) => {
  const { authConfig } = props;
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

  return <Button onPress={signInHandler}>Sign in google</Button>;
};
