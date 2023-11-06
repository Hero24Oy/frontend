import { useRouter } from 'expo-router';
import { FC } from 'react';

import { AuthScreen } from '@hero24/common';

const Auth: FC = () => {
  const router = useRouter();

  const signInWithEmailCallback = (): void => {
    router.push('/sign-in-with-email');
  };

  const signInWithPhoneCallback = (): void => {
    router.push('/confirmation-code');
  };

  return (
    <AuthScreen
      signInWithEmailCallback={signInWithEmailCallback}
      signInWithPhoneCallback={signInWithPhoneCallback}
    />
  );
};

export default Auth;
