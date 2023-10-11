import { signInWithEmailAndPassword } from 'firebase/auth';
import { useCallback } from 'react';

import { useFirebaseAuth } from '../../../core/providers';

import { EmailPasswordParams } from './types';

type UseEmailSignIn = () => {
  signInWithEmail: (params: EmailPasswordParams) => Promise<void>;
};

export const useEmailSignIn: UseEmailSignIn = () => {
  const firebaseAuth = useFirebaseAuth();

  const signInWithEmail = useCallback(async (params: EmailPasswordParams) => {
    try {
      const { email, password } = params;

      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { signInWithEmail };
};
