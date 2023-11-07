import { useRouter } from 'expo-router';

type ReturnType = {
  onForgotPasswordCallback: () => void;
};

export const useLogic = (): ReturnType => {
  const router = useRouter();

  const onForgotPasswordCallback = (): void => {
    // TODO -- repl
    router.push('/reset-password/');
  };

  return { onForgotPasswordCallback };
};
