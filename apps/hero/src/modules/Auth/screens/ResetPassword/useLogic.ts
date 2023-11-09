import { useRouter } from 'expo-router';
import { useCallback } from 'react';

export const useLogic = () => {
  const router = useRouter();

  const onSuccessCallback = useCallback((): void => {
    router.push('/reset-password-check-email/');
  }, []);

  return { onSuccessCallback };
};
