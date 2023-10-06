import { Auth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useCallback } from 'react';

import { EmailPasswordData } from './types';

type UseEmailSignUp = (
  firebaseAuth: Auth,
) => (data: EmailPasswordData) => Promise<void>;

export const useEmailSignUp: UseEmailSignUp = (auth) => {
  const signUpHandler = useCallback(
    async (data: EmailPasswordData) => {
      const { email, password } = data;

      await createUserWithEmailAndPassword(auth, email, password);
    },
    [auth],
  );

  return signUpHandler;
};
