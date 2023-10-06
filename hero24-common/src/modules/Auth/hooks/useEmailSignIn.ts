import { Auth, signInWithEmailAndPassword } from 'firebase/auth';
import { useCallback } from 'react';

import { EmailPasswordData } from './types';

type SignInWithEmail = (data: EmailPasswordData) => Promise<void>;

export const useEmailSignIn = (auth: Auth): SignInWithEmail => {
  const signInHandler = useCallback(
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

  return signInHandler;
};
