import { StackKeyboardAwareScrollView } from 'core';
import { FC } from 'react';

import { ResetPasswordByEmailVerification } from '$modules/Auth/components/ResetPasswordByEmailVerification';

export const ResetPasswordByEmailVerificationScreen: FC = () => {
  return (
    <StackKeyboardAwareScrollView>
      <ResetPasswordByEmailVerification />
    </StackKeyboardAwareScrollView>
  );
};
