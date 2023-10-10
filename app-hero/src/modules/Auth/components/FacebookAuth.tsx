import { Button, ButtonText } from '@gluestack-ui/themed';
import React, { FC } from 'react';

import { useAuthentication, useFacebookAuth } from '$common';
import { authConfig } from '$configs';

export const FacebookAuth: FC = () => {
  const { signInWithCredentials } = useAuthentication();

  const { signInWithFacebook } = useFacebookAuth({
    onAuthSucceed: signInWithCredentials,
    facebookAppId: authConfig.facebookAppId,
  });

  return (
    <Button
      onPress={(): void => {
        signInWithFacebook().catch((err) => console.error(err));
      }}
    >
      <ButtonText>Sign in facebook</ButtonText>
    </Button>
  );
};
