import { useRouter } from 'expo-router';

type ReturnType = {
  onForgotPasswordCallback: () => void;
};

export const useLogic = (): ReturnType => {
  const router = useRouter();

  const onForgotPasswordCallback = (): void => {
    router.push('/reset-password/');
  };

  return { onForgotPasswordCallback };
};
