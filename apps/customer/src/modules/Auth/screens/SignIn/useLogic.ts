import { useRouter } from 'expo-router';
import { useCallback } from 'react';

export const useLogic = () => {
  const router = useRouter();

  const signInWithEmailCallback = useCallback((): void => {
    router.push('/sign-in-with-email/');
  }, []);

  const signInWithPhoneCallback = useCallback((): void => {
    router.push('/confirmation-code/');
  }, []);

  return { signInWithEmailCallback, signInWithPhoneCallback };
};
