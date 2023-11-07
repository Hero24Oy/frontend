import { useRouter } from 'expo-router';

type ReturnType = {
  onSuccessResetPasswordCallback: () => void;
};

export const useLogic = (): ReturnType => {
  const router = useRouter();

  const onSuccessResetPasswordCallback = (): void => {
    router.push('/reset-password-check-email/');
  };

  return { onSuccessResetPasswordCallback };
};
