import { FC } from 'react';

import { ResetPasswordFormText } from '../components';
import { ResetPasswordForm, ResetPasswordFormProps } from '../forms';

import { StyledKeyboardAwareScrollView } from '$common/core';

type Props = ResetPasswordFormProps;

export const ResetPasswordScreen: FC<Props> = (props) => {
  const { onSuccessResetPasswordHandler } = props;

  return (
    <StyledKeyboardAwareScrollView>
      <ResetPasswordFormText />
      <ResetPasswordForm
        onSuccessResetPasswordHandler={onSuccessResetPasswordHandler}
      />
    </StyledKeyboardAwareScrollView>
  );
};
