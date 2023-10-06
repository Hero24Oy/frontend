import { Auth, signInWithEmailAndPassword } from 'firebase/auth';
import { useCallback } from 'react';

import { EmailPasswordData, SignInWithEmail } from '../types';

export const useEmailSignIn = (auth: Auth): SignInWithEmail => {
  const signInHandler = useCallback(
    async (data: EmailPasswordData) => {
      const { email, password } = data;

      await signInWithEmailAndPassword(auth, email, password);
    },
    [auth],
  );

  return signInHandler;
};
