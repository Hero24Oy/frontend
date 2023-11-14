import { useCallback } from 'react';

import { getMaskedEmail } from './utils';

import { useResetEmailPassword, WithCallback } from '$modules/Auth/hooks';
import { useEmailAuthStore } from '$modules/Auth/stores';

type UseLogicParams = WithCallback;

export const useLogic = (params: UseLogicParams) => {
  const { onAuthFailed, onAuthSucceed } = params;
  const { email } = useEmailAuthStore<'strict'>();

  const { resetPassword } = useResetEmailPassword({
    onAuthSucceed,
    onAuthFailed,
  });

  const sendOneMoreTime = useCallback(async () => {
    await resetPassword(email);
  }, []);

  // TODO i18n
  const message = `We sent a link to reset your password to ${getMaskedEmail(
    email,
  )}`;

  return {
    message,
    sendOneMoreTime,
  };
};
