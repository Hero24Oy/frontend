import { PhoneAuthProvider } from 'firebase/auth';
import { useCallback, useMemo } from 'react';

import { useFirebaseAuth } from '../../../stores';

import { usePhoneAuthStore } from './phoneAuthStore';
import { SendVerificationCode } from './types';

// TODO types
export const useSendVerificationCode = () => {
  const { setVerificationId, setPhoneNumber } = usePhoneAuthStore();

  const auth = useFirebaseAuth();
  const phoneProvider = useMemo(() => new PhoneAuthProvider(auth), []);

  const sendVerificationCode: SendVerificationCode = useCallback(
    async (config) => {
      try {
        const { phoneNumber, reCaptcha } = config;

        if (!reCaptcha) {
          throw new Error('Recaptcha has not been initialized');
        }

        const newVerificationId = await phoneProvider.verifyPhoneNumber(
          phoneNumber,
          reCaptcha,
        );

        setVerificationId(newVerificationId);
        setPhoneNumber(phoneNumber);
      } catch (error) {
        console.error(error); // TODO add error handling
      }
    },
    [],
  );

  return { sendVerificationCode };
};
