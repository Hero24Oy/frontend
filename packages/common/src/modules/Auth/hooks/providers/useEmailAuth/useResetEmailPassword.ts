import { sendPasswordResetEmail } from 'firebase/auth';
import { useCallback } from 'react';

import { WithCallback } from '../../types';

import { parseError } from '$core';
import { useFirebaseAuth } from '$modules/Auth/stores';

type ResetPassword = (email: string) => Promise<void>;

type EmailAuthConfig = WithCallback;

export type UseResetEmailPassword = (params: EmailAuthConfig) => {
  resetPassword: ResetPassword;
};

export const useResetEmailPassword: UseResetEmailPassword = (params) => {
  const { onAuthFailed, onAuthSucceed } = params;
  const auth = useFirebaseAuth();

  const resetPassword: ResetPassword = useCallback(async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);

      await onAuthSucceed?.();
    } catch (error) {
      const parsedError = parseError(error);

      onAuthFailed?.(parsedError);
    }
  }, []);

  return { resetPassword };
};
