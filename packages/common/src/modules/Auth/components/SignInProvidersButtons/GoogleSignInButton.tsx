import { FC } from 'react';

import { Button, GoogleIcon } from '@hero24/ui';

import { useAuthentication, useGoogleAuth } from '$modules/Auth/hooks';
import { useAuthConfig } from '$modules/Auth/stores';
import { handleAuthError } from '$modules/Auth/utils';

export const GoogleSignInButton: FC = () => {
  const { signInWithCredentials } = useAuthentication();
  const { androidClientId, iosClientId, webClientId } = useAuthConfig();

  const { signInWithGoogle } = useGoogleAuth({
    webClientId,
    iosClientId,
    androidClientId,
    onAuthSucceed: signInWithCredentials,
    onAuthFailed: handleAuthError,
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
