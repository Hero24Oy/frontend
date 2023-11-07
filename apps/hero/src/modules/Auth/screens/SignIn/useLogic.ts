import { useRouter } from 'expo-router';

type ReturnType = {
  signInWithEmailCallback: () => void;
  signInWithPhoneCallback: () => void;
};

export const useLogic = (): ReturnType => {
  const router = useRouter();

  const signInWithEmailCallback = (): void => {
    router.push('/sign-in-with-email/');
  };

  const signInWithPhoneCallback = (): void => {
    router.push('/confirmation-code/');
  };

  return { signInWithEmailCallback, signInWithPhoneCallback };
};
