import { StackKeyboardAwareScrollView } from 'core';
import { FC } from 'react';

import { ResetPasswordCheckEmail } from '../../components';

import { useLogic } from './useLogic';

export const ResetPasswordCheckEmailScreen: FC = () => {
  const email = useLogic();

  return (
    <StackKeyboardAwareScrollView>
      <ResetPasswordCheckEmail email={email} />
    </StackKeyboardAwareScrollView>
  );
};
