import { StackKeyboardAwareScrollView } from 'core';
import { FC } from 'react';

import { ResetPasswordCheckEmail } from '../../components';

export const ResetPasswordCheckEmailScreen: FC = () => {
  return (
    <StackKeyboardAwareScrollView>
      <ResetPasswordCheckEmail />
    </StackKeyboardAwareScrollView>
  );
};
