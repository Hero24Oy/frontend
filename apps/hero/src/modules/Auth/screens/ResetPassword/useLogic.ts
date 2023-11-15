import { useRouter } from 'expo-router';
import { useCallback } from 'react';

export const useLogic = () => {
  const router = useRouter();

  const onSuccessCallback = useCallback((): void => {
    router.push('/reset-password-email-verification');
  }, []);

  return { onSuccessCallback };
};
