import { useRouter } from 'expo-router';
import { useCallback } from 'react';

type ReturnType = {
  onSuccessResetPasswordCallback: () => void;
};

export const useLogic = (): ReturnType => {
  const router = useRouter();

  const onSuccessResetPasswordCallback = useCallback((): void => {
    router.push('/reset-password-check-email/');
  }, []);

  return { onSuccessResetPasswordCallback };
};
