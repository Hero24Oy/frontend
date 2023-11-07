import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useCallback } from 'react';

import { useFirebaseAuth } from '../stores';

import { EmailPasswordParams, WithCallback } from './types';

import { parseError } from '$common/core';

type SignUpWithEmail = (params: EmailPasswordParams) => Promise<void>;

type EmailAuthConfig = WithCallback;

type UseEmailSignUp = (config: EmailAuthConfig) => {
  signUpWithEmail: SignUpWithEmail;
};

export const useEmailSignUp: UseEmailSignUp = (props) => {
  const firebaseAuth = useFirebaseAuth();
  const { onAuthFailed, onAuthSucceed } = props;

  const signUpWithEmail: SignUpWithEmail = useCallback(async (params) => {
    const { email, password } = params;

    try {
      const userCredentials = await createUserWithEmailAndPassword(
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

  return { signUpWithEmail };
};
