import { StackKeyboardAwareScrollView } from 'core';
import { FC } from 'react';

import { ResetPasswordByEmailVerification } from '$modules/Auth/components';

export const ResetPasswordByEmailVerificationScreen: FC = () => {
  return (
    <StackKeyboardAwareScrollView>
      <ResetPasswordByEmailVerification />
    </StackKeyboardAwareScrollView>
  );
};
