import { signInWithEmailAndPassword } from 'firebase/auth';
import { useCallback } from 'react';

import { useFirebaseAuth } from '../../../core/providers';

import { EmailPasswordParams } from './types';

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
