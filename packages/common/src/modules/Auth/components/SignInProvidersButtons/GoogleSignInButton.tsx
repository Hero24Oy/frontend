import { FC } from 'react';

import { Button, GoogleIcon } from '@hero24/ui';

import { useGoogleAuth } from '../../hooks';

import { useAuthConfig } from '$common/modules';

export const GoogleSignInButton: FC = () => {
  const { androidClientId, iosClientId, webClientId } = useAuthConfig();

  const { signInWithGoogle } = useGoogleAuth({
    webClientId,
    iosClientId,
    androidClientId,
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
