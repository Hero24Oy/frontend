import {
  ApplicationVerifier,
  OAuthCredential,
  PhoneAuthProvider,
} from 'firebase/auth';
import { useCallback, useMemo, useState } from 'react';

import { useFirebaseAuth } from '../stores';

import { useAuthentication } from './useAuthentication';

type PhoneAuthConfig = {
  verificationCode: string;
};

type SignInWithPhone = (config: PhoneAuthConfig) => Promise<void>;

type VerificationCode = {
  phoneNumber: string;
  reCaptcha: ApplicationVerifier;
};
type SendVerificationCode = (config: VerificationCode) => Promise<void>;

type UsePhoneAuth = () => {
  sendVerificationCode: SendVerificationCode;
  signInWithPhone: SignInWithPhone;
};

export const usePhoneAuth: UsePhoneAuth = () => {
  const [verificationId, setVerificationId] = useState<string>();
  const { signInWithCredentials } = useAuthentication();
  const auth = useFirebaseAuth();
  const phoneProvider = useMemo(() => new PhoneAuthProvider(auth), []);

  const signInWithPhone: SignInWithPhone = useCallback(
    async (config) => {
      const { verificationCode } = config;

      if (!verificationId) {
        console.error('Verification id is not initialized! Send code firstly');

        return;
      }

      const credentials = PhoneAuthProvider.credential(
        verificationId,
        verificationCode,
      ) as unknown as OAuthCredential; // ts argues about type mismatch, but actually they are of type OAuthCredential

      try {
        await signInWithCredentials(credentials);
      } catch (error) {
        console.error(error);
      }
    },
    [verificationId],
  );

  const sendVerificationCode: SendVerificationCode = useCallback(
    async (config) => {
      try {
        const { phoneNumber, reCaptcha } = config;

        const newVerificationId = await phoneProvider.verifyPhoneNumber(
          phoneNumber,
          reCaptcha,
        );

        setVerificationId(newVerificationId);
      } catch (error) {
        console.error(error);
      }
    },
    [],
  );

  return { signInWithPhone, sendVerificationCode };
};
