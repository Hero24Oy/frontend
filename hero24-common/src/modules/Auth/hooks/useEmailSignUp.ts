import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useCallback } from 'react';

import { useFirebaseAuth } from '../../../core/providers';

import { EmailPasswordParams } from './types';

type UseEmailSignUp = () => {
  signUpWithEmail: (params: EmailPasswordParams) => Promise<void>;
};

export const useEmailSignUp: UseEmailSignUp = () => {
  const firebaseAuth = useFirebaseAuth();

  const signUpWithEmail: ReturnType<UseEmailSignUp>['signUpWithEmail'] =
    useCallback(async (params) => {
      const { email, password } = params;

      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    }, []);

  return { signUpWithEmail };
};
