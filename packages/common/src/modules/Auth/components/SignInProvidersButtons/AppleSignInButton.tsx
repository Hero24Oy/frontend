import { FC } from 'react';

import { AppleIcon, Button } from '@hero24/ui';

import { useAppleAuth } from '../../hooks';

export const AppleSignInButton: FC = () => {
  const { signInWithApple } = useAppleAuth({});

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
