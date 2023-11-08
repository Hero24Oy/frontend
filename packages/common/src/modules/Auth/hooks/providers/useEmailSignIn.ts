import { EmailAuthProvider, OAuthCredential } from 'firebase/auth';
import { useCallback } from 'react';

import { EmailPasswordParams, WithCallback } from '../types';

import { parseError } from '$common/core';

type SignInWithEmail = (params: EmailPasswordParams) => void;

type EmailAuthConfig = WithCallback;

type UseEmailSignIn = (config: EmailAuthConfig) => {
  signInWithEmail: SignInWithEmail;
};

export const useEmailSignIn: UseEmailSignIn = (params) => {
  const { onAuthFailed, onAuthSucceed } = params;

  const signInWithEmail: SignInWithEmail = useCallback((data) => {
    try {
      const { email, password } = data;

      const credentials = EmailAuthProvider.credential(
        email,
        password,
      ) as OAuthCredential;

      onAuthSucceed?.(credentials);
    } catch (error) {
      const parsedError = parseError(error);

      onAuthFailed?.(parsedError);
    }
  }, []);

  return { signInWithEmail };
};
