import { signInWithEmailAndPassword } from 'firebase/auth';
import { useCallback } from 'react';

import { useFirebaseAuth } from '../../../core/providers';

import { EmailPasswordData } from './types';

type UseEmailSignIn = () => {
  signInWithEmail: (data: EmailPasswordData) => Promise<void>;
};

export const useEmailSignIn: UseEmailSignIn = () => {
  const firebaseAuth = useFirebaseAuth();

  const signInWithEmail = useCallback(async (data: EmailPasswordData) => {
    try {
      const { email, password } = data;

      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { signInWithEmail };
};
