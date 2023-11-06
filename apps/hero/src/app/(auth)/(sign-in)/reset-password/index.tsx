import { useRouter } from 'expo-router';
import { FC } from 'react';

import { ResetPasswordScreen } from '@hero24/common';

const ResetPassword: FC = () => {
  const router = useRouter();

  const onSuccessResetPasswordCallback = (): void => {
    router.push('/reset-password-check-email');
  };

  return (
    <ResetPasswordScreen
      onSuccessResetPasswordCallback={onSuccessResetPasswordCallback}
    />
  );
};

export default ResetPassword;
