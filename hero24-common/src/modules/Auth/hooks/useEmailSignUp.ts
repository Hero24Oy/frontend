import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useCallback } from 'react';

import { useFirebaseAuth } from '../../../core/providers';

import { EmailPasswordParams } from './types';

type UseEmailSignUp = () => {
  signUpWithEmail: (data: EmailPasswordParams) => Promise<void>;
};

export const useEmailSignUp: UseEmailSignUp = () => {
  const firebaseAuth = useFirebaseAuth();

  const signUpWithEmail = useCallback(async (data: EmailPasswordParams) => {
    const { email, password } = data;

    await createUserWithEmailAndPassword(firebaseAuth, email, password);
  }, []);

  return { signUpWithEmail };
};
