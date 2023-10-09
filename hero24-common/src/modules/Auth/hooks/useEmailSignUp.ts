import { Auth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useCallback } from 'react';

import { EmailPasswordData } from './types';

type UseEmailSignUp = (firebaseAuth: Auth) => {
  signUpWithEmail: (data: EmailPasswordData) => Promise<void>;
};

export const useEmailSignUp: UseEmailSignUp = (auth) => {
  const signUpWithEmail = useCallback(
    async (data: EmailPasswordData) => {
      try {
        const { email, password } = data;

        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        console.error(error);
      }
    },
    [auth],
  );

  return { signUpWithEmail };
};
