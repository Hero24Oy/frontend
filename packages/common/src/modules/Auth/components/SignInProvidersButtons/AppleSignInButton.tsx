import { FC } from 'react';

import { AppleIcon, Button } from '@hero24/ui';

import { useAppleAuth, useAuthentication } from '../../hooks';

export const AppleSignInButton: FC = () => {
  const { signInWithCredentials } = useAuthentication();

  const { signInWithApple } = useAppleAuth({
    onAuthSucceed: signInWithCredentials,
  });

  return (
    <Button
      variant="outline"
      action="secondary"
      onPress={signInWithApple}
      icon={AppleIcon}
    >
      Continue with Apple
    </Button>
  );
};
