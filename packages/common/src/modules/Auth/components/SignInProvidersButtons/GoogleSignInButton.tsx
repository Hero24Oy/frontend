import { FC } from 'react';

import { Button, GoogleIcon } from '@hero24/ui';

import { useAuthentication, useGoogleAuth } from '../../hooks';

import { useAuthConfig } from '$common/modules';

export const GoogleSignInButton: FC = () => {
  const { signInWithCredentials } = useAuthentication();

  const { androidClientId, iosClientId, webClientId } = useAuthConfig();

  const { signInWithGoogle } = useGoogleAuth({
    webClientId,
    iosClientId,
    androidClientId,
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
