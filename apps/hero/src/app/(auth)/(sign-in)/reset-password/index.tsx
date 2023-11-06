import { useRouter } from 'expo-router';
import { FC } from 'react';

import { ResetPasswordScreen } from '@hero24/common';

const ResetPassword: FC = () => {
  const router = useRouter();

  const onSuccessResetPasswordHandler = (): void => {
    router.push('/reset-password-check-email');
  };

  return (
    <ResetPasswordScreen
      onSuccessResetPasswordHandler={onSuccessResetPasswordHandler}
    />
  );
};

export default ResetPassword;
