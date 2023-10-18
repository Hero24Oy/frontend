import { signInWithEmailAndPassword } from 'firebase/auth';
import { useCallback } from 'react';

import { EmailPasswordParams } from './types';

import { useFirebaseAuth } from '$common/core';

type SignInWithEmail = (params: EmailPasswordParams) => Promise<void>;

type UseEmailSignIn = () => {
  signInWithEmail: SignInWithEmail;
};

export const useEmailSignIn: UseEmailSignIn = () => {
  const firebaseAuth = useFirebaseAuth();

  const signInWithEmail: SignInWithEmail = useCallback(async (params) => {
    try {
      const { email, password } = params;

      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { signInWithEmail };
};
