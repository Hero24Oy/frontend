import { useRouter } from 'expo-router';
import { FC } from 'react';

import { AuthScreen } from '@hero24/common';

const Auth: FC = () => {
  const router = useRouter();

  const signInWithEmailHandler = (): void => {
    router.push('/sign-in-with-email');
  };

  const signInWithPhoneHandler = (): void => {
    router.push('/confirmation-code');
  };

  return (
    <AuthScreen
      signInWithEmailHandler={signInWithEmailHandler}
      signInWithPhoneHandler={signInWithPhoneHandler}
    />
  );
};

export default Auth;
