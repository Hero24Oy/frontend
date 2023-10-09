import { Auth, signInWithEmailAndPassword } from 'firebase/auth';
import { useCallback } from 'react';

import { EmailPasswordData } from './types';

type UseEmailSignIn = (firebaseAuth: Auth) => {
  signInWithEmail: (data: EmailPasswordData) => Promise<void>;
};

export const useEmailSignIn: UseEmailSignIn = (auth) => {
  const signInWithEmail = useCallback(
    async (data: EmailPasswordData) => {
      try {
        const { email, password } = data;

        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        console.error(error);
      }
    },
    [auth],
  );

  return { signInWithEmail };
};
