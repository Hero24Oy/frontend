import { OAuthCredential, PhoneAuthProvider } from 'firebase/auth';

import { WithCallback } from '../../types';

import { usePhoneAuthStore } from './phoneAuthStore';

import { parseError } from '$core';

export const useVerifyCode = (props: WithCallback) => {
  const { onAuthFailed, onAuthSucceed } = props;
  const { verificationId } = usePhoneAuthStore();

  const verifyCode = async (verificationCode: string) => {
    try {
      if (!verificationId) {
        throw new Error(
          'Verification id is not initialized! Send code firstly',
        );
      }

      const credentials = PhoneAuthProvider.credential(
        verificationId,
        verificationCode,
      ) as unknown as OAuthCredential; // ts argues about type mismatch, but actually they are of type OAuthCredential

      await onAuthSucceed?.(credentials);
    } catch (error) {
      const errorParsed = parseError(error);

      onAuthFailed?.(errorParsed);
    }
  };

  return { verifyCode };
};
