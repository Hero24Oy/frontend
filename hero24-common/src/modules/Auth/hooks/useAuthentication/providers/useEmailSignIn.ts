import { Auth, signInWithEmailAndPassword } from 'firebase/auth';
import { useCallback } from 'react';

import { EmailPasswordData } from '../../../types';
import { SignInWithProvider } from '../types';

export const useEmailSignIn = (auth: Auth): SignInWithProvider => {
  const signInHandler = useCallback(
    async (data: EmailPasswordData) => {
      const { email, password } = data;

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const { user } = userCredential;
      const { uid } = user;

      return {
        id: uid,
      };
    },
    [auth],
  );

  return signInHandler;
};
