import { Auth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useCallback } from 'react';

import { EmailPasswordData, SignUpWithEmail } from '../types';

export const useEmailSignUp = (auth: Auth): SignUpWithEmail => {
  const signUpHandler = useCallback(
    async (data: EmailPasswordData) => {
      const { email, password } = data;

      await createUserWithEmailAndPassword(auth, email, password);
    },
    [auth],
  );

  return signUpHandler;
};
