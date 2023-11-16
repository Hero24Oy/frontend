import { useCallback } from 'react';

import { parseError } from '$core';
import { useSendVerificationCode, WithCallback } from '$modules/Auth/hooks';
import { usePhoneAuthStore } from '$modules/Auth/stores';

type UseSendOneMoreTimeParams = Pick<WithCallback, 'onAuthFailed'>;

type UseSendOneMoreTime = (params: UseSendOneMoreTimeParams) => {
  sendOneMoreTime: () => Promise<void>;
};

export const useSendOneMoreTime: UseSendOneMoreTime = (params) => {
  const { onAuthFailed } = params;
  // We are sure that on this page phone number and reCaptcha are defined
  const { phoneNumber, reCaptcha } = usePhoneAuthStore<'strict'>();

  const { sendVerificationCode } = useSendVerificationCode({
    onAuthFailed,
  });

  const sendOneMoreTime = useCallback(async () => {
    try {
      await sendVerificationCode({ phoneNumber, reCaptcha });
    } catch (error) {
      onAuthFailed?.(parseError(error));
    }
  }, [phoneNumber, reCaptcha, onAuthFailed]);

  return {
    sendOneMoreTime,
  };
};
