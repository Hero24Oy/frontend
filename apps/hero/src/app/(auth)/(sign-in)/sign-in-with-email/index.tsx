import { useRouter } from 'expo-router';
import { FC } from 'react';

import { SignInWithEmailScreen } from '@hero24/common';

const SignInWithEmail: FC = () => {
  const router = useRouter();

  const onForgotPasswordCallback = (): void => {
    router.push('/reset-password');
  };

  return (
    <SignInWithEmailScreen
      onForgotPasswordCallback={onForgotPasswordCallback}
    />
  );
};

export default SignInWithEmail;
