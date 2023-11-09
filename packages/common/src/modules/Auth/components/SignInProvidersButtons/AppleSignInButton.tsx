import { FC } from 'react';

import { AppleIcon, Button } from '@hero24/ui';

import { useAppleAuth, useAuthentication } from '../../hooks';
import { handleAuthError } from '../../utils';

export const AppleSignInButton: FC = () => {
  const { signInWithCredentials } = useAuthentication();

  const { signInWithApple } = useAppleAuth({
    onAuthSucceed: signInWithCredentials,
    onAuthFailed: handleAuthError,
  });

  return (
    <Button
      variant="outline"
      action="secondary"
      size="lg"
      onPress={signInWithApple}
      icon={AppleIcon}
    >
      Continue with Apple
    </Button>
  );
};
