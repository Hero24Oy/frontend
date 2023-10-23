import React, { FC } from 'react';

import { Button } from '@hero24/ui';

import { useAuthentication, useFacebookAuth } from '../hooks';
import { FacebookAuthConfig } from '../types';

interface Props {
  authConfig: FacebookAuthConfig;
}

export const FacebookAuth: FC<Props> = (props) => {
  const { authConfig } = props;
  const { signInWithCredentials } = useAuthentication();

  const { signInWithFacebook } = useFacebookAuth({
    onAuthSucceed: signInWithCredentials,
    facebookAppId: authConfig.facebookAppId,
  });

  const signInHandler = async (): Promise<void> => {
    try {
      await signInWithFacebook();
    } catch (error) {
      console.error(error);
    }
  };

  return <Button onPress={signInHandler}>Sign in facebook</Button>;
};
