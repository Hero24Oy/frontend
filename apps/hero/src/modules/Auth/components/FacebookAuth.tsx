import React, { FC } from 'react';

import { useAuthentication, useFacebookAuth } from '@hero24/common';

import { authConfig } from '$configs';

import { Button } from '@hero24/ui';

export const FacebookAuth: FC = () => {
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

  return (
    <Button variant="solid" size="medium" onPress={signInHandler}>
      Sign in facebook
    </Button>
  );
};
