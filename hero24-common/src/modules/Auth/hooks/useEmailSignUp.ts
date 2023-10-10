import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useCallback } from 'react';

import { useFirebaseAuth } from '../../../core/providers';

import { EmailPasswordData } from './types';

type UseEmailSignUp = () => {
  signUpWithEmail: (data: EmailPasswordData) => Promise<void>;
};

export const useEmailSignUp: UseEmailSignUp = () => {
  const firebaseAuth = useFirebaseAuth();

  const signUpWithEmail = useCallback(async (data: EmailPasswordData) => {
    try {
      const { email, password } = data;

      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { signUpWithEmail };
};
