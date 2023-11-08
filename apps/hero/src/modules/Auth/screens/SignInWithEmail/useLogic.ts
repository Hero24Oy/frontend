import { useRouter } from 'expo-router';
import { useCallback } from 'react';

type ReturnType = {
  onForgotPasswordCallback: () => void;
};

export const useLogic = (): ReturnType => {
  const router = useRouter();

  const onForgotPasswordCallback = useCallback((): void => {
    router.push('/reset-password/');
  }, []);

  return { onForgotPasswordCallback };
};
