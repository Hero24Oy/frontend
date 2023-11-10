import { PhoneAuthProvider } from 'firebase/auth';
import { useCallback } from 'react';

import { useFirebaseAuth } from '../../../stores';
import { WithCallback } from '../../types';

import { usePhoneAuthStore } from './phoneAuthStore';
import { SendVerificationCode } from './types';

import { parseError } from '$core';

// TODO types
// TODO do not go to next screen unless code is sent
type UseSendVerificationCodeProps = WithCallback;

export const useSendVerificationCode = (
  props: UseSendVerificationCodeProps,
) => {
  const { onAuthFailed, onAuthSucceed } = props;

  const { setVerificationId, setPhoneNumber } = usePhoneAuthStore();

  const auth = useFirebaseAuth();

  const sendVerificationCode: SendVerificationCode = useCallback(
    async (config) => {
      try {
        const { phoneNumber, reCaptcha } = config;

        const phoneProvider = new PhoneAuthProvider(auth);

        if (!reCaptcha) {
          throw new Error('Recaptcha has not been initialized');
        }

        const newVerificationId = await phoneProvider.verifyPhoneNumber(
          phoneNumber,
          reCaptcha,
        );

        setVerificationId(newVerificationId);
        setPhoneNumber(phoneNumber);
        await onAuthSucceed?.();
      } catch (error) {
        onAuthFailed?.(parseError(error));
      }
    },
    [onAuthFailed, onAuthSucceed],
  );

  return { sendVerificationCode };
};
