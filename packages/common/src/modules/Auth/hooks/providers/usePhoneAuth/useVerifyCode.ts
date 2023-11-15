import { OAuthCredential, PhoneAuthProvider } from 'firebase/auth';
import { useCallback } from 'react';

import { WithCallback } from '../../types';

import { parseError } from '$core';
import { usePhoneAuthStore } from '$modules/Auth/stores';

type UseVerifyCodeParams = WithCallback;

type UseVerifyCode = (params: UseVerifyCodeParams) => {
  verifyCode: (verificationCode: string) => Promise<void>;
};

export const useVerifyCode: UseVerifyCode = (params) => {
  const { onAuthFailed, onAuthSucceed } = params;
  const { verificationId } = usePhoneAuthStore();

  const verifyCode = useCallback(async (verificationCode: string) => {
    try {
      if (!verificationId) {
        throw new Error(
          'Verification id has not been initialized! Send code firstly',
        );
      }

      const credentials = PhoneAuthProvider.credential(
        verificationId,
        verificationCode,
      ) as unknown as OAuthCredential; // ts argues about type mismatch, but actually they are of type OAuthCredential

      await onAuthSucceed?.(credentials);
    } catch (error) {
      onAuthFailed?.(parseError(error));
    }
  }, []);

  return { verifyCode };
};
