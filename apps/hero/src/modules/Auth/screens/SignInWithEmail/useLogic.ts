import { useRouter } from 'expo-router';
import { useCallback } from 'react';

export const useLogic = () => {
  const router = useRouter();

  const onForgotPasswordCallback = useCallback((): void => {
    router.push('/reset-password/');
  }, []);

  return { onForgotPasswordCallback };
};
