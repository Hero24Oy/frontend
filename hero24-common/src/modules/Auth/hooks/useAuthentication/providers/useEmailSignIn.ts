import { Auth, signInWithEmailAndPassword } from 'firebase/auth';
import { useCallback } from 'react';

import { EmailPasswordData } from '../../../types';
import { SignInWithProvider } from '../types';

export const useEmailSignIn = (auth: Auth): SignInWithProvider => {
  const signInHandler = useCallback(
    async (data: EmailPasswordData) => {
      const { email, password } = data;

      // TODO remake like in google auth
      await signInWithEmailAndPassword(auth, email, password);
    },
    [auth],
  );

  return signInHandler;
};
