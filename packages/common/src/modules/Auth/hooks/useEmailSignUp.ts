import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useCallback } from 'react';

import { EmailPasswordParams } from './types';

import { useFirebaseAuth } from '$common/core';

type SignUpWithEmail = (params: EmailPasswordParams) => Promise<void>;

type UseEmailSignUp = () => {
  signUpWithEmail: SignUpWithEmail;
};

export const useEmailSignUp: UseEmailSignUp = () => {
  const firebaseAuth = useFirebaseAuth();

  const signUpWithEmail: SignUpWithEmail = useCallback(async (params) => {
    const { email, password } = params;

    await createUserWithEmailAndPassword(firebaseAuth, email, password);
  }, []);

  return { signUpWithEmail };
};
