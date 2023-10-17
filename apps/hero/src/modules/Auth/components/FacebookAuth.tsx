import { Button, ButtonText } from '@gluestack-ui/themed';
import React, { FC } from 'react';

import { useAuthentication, useFacebookAuth } from '@hero24/common';

import { authConfig } from '$configs';

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
    <Button onPress={signInHandler}>
      <ButtonText>Sign in facebook</ButtonText>
    </Button>
  );
};
