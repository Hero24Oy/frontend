import { FC } from 'react';

import { Button, GoogleIcon } from '@hero24/ui';

import { useAuthentication, useGoogleAuth } from '../../hooks';

import { useEnvConfig } from '$common/core';

export const GoogleSignInButton: FC = () => {
  const { signInWithCredentials } = useAuthentication();

  const { ANDROID_CLIENT_ID, IOS_CLIENT_ID, WEB_CLIENT_ID } = useEnvConfig();

  const { signInWithGoogle } = useGoogleAuth({
    webClientId: WEB_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    androidClientId: ANDROID_CLIENT_ID,
    onAuthSucceed: signInWithCredentials,
  });

  // TODO use i18next
  return (
    <Button
      icon={GoogleIcon}
      variant="outline"
      action="secondary"
      size="lg"
      onPress={signInWithGoogle}
    >
      Continue with Google
    </Button>
  );
};
