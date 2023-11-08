import { signInWithEmailAndPassword } from 'firebase/auth';
import { useCallback } from 'react';

import { useFirebaseAuth } from '../stores';

import { EmailPasswordParams, WithCallback } from './types';

import { parseError } from '$common/core';

type SignInWithEmail = (params: EmailPasswordParams) => Promise<void>;

type EmailAuthConfig = WithCallback;

type UseEmailSignIn = (config: EmailAuthConfig) => {
  signInWithEmail: SignInWithEmail;
};

export const useEmailSignIn: UseEmailSignIn = (params) => {
  const firebaseAuth = useFirebaseAuth();
  const { onAuthFailed, onAuthSucceed } = params;

  const signInWithEmail: SignInWithEmail = useCallback(async (credentials) => {
    try {
      const { email, password } = credentials;

      const userCredentials = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password,
      );

      onAuthSucceed?.(userCredentials);
    } catch (error) {
      const parsedError = parseError(error);

      onAuthFailed?.(parsedError);
    }
  }, []);

  return { signInWithEmail };
};
