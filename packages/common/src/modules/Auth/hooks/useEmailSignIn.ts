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

export const useEmailSignIn: UseEmailSignIn = (props) => {
  const firebaseAuth = useFirebaseAuth();
  const { onAuthFailed, onAuthSucceed } = props;

  const signInWithEmail: SignInWithEmail = useCallback(async (params) => {
    try {
      const { email, password } = params;

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
