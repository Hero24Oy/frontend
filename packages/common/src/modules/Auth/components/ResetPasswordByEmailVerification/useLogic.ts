import { useCallback } from 'react';

import { getMaskedEmail } from './utils';

import { StrictType } from '$core';
import { useResetPasswordByEmail } from '$modules/Auth/hooks';
import { useEmailAuthStore } from '$modules/Auth/stores';

export const useLogic = () => {
  const { email } = useEmailAuthStore<StrictType.STRICT>();

  const { resetPassword } = useResetPasswordByEmail({});

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
