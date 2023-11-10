import { useCallback } from 'react';

import { DEBOUNCE_TIME } from '../constants';

import { useTimer } from './useTimer';

import { parseError } from '$core';
import { useSendVerificationCode, WithCallback } from '$modules/Auth/hooks';
import { usePhoneAuthStore } from '$modules/Auth/stores';

type UseSendOneMoreTimeParams = Pick<WithCallback, 'onAuthFailed'>;

type UseSendOneMoreTime = (params: UseSendOneMoreTimeParams) => {
  debounceTime: number;
  sendOneMoreTime: () => Promise<void>;
};

export const useSendOneMoreTime: UseSendOneMoreTime = (params) => {
  const { onAuthFailed } = params;

  const { timeLeft, resetTimer } = useTimer({ timeInSeconds: DEBOUNCE_TIME });
  // We are sure that on this page phone number and reCaptcha are defined
  const { phoneNumber, reCaptcha } = usePhoneAuthStore<'strict'>();

  const { sendVerificationCode } = useSendVerificationCode({
    onAuthFailed,
  });

  const sendOneMoreTime = useCallback(async () => {
    try {
      await sendVerificationCode({ phoneNumber, reCaptcha });
      resetTimer();
    } catch (error) {
      onAuthFailed?.(parseError(error));
    }
  }, [timeLeft, phoneNumber, reCaptcha]);

  return {
    sendOneMoreTime,
    debounceTime: timeLeft,
  };
};
