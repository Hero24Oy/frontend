import { ApplicationVerifier, PhoneAuthProvider } from 'firebase/auth';
import { useCallback } from 'react';

import { WithCallback } from '../../types';

import { parseError } from '$core';
import { useFirebaseAuth, usePhoneAuthStore } from '$modules/Auth/stores';

export type SendVerificationCodeParams = {
  phoneNumber: string;
  reCaptcha: ApplicationVerifier | null;
};

export type SendVerificationCode = (
  config: SendVerificationCodeParams,
) => Promise<void>;

type UseSendVerificationCodeProps = WithCallback;

type UseSendVerificationCode = (props: UseSendVerificationCodeProps) => {
  sendVerificationCode: SendVerificationCode;
};

export const useSendVerificationCode: UseSendVerificationCode = (props) => {
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
