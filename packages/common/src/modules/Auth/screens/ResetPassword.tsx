import { FC } from 'react';

import { ResetPasswordFormText } from '../components';
import { ResetPasswordForm } from '../forms';
import { ResetPasswordFormProps } from '../forms/ResetPasswordForm/types';

import { StyledKeyboardAwareScrollView } from '$common/core';

type Props = ResetPasswordFormProps;

export const ResetPasswordScreen: FC<Props> = (props) => {
  const { onSuccessResetPasswordCallback } = props;

  return (
    <StyledKeyboardAwareScrollView>
      <ResetPasswordFormText />
      <ResetPasswordForm
        onSuccessResetPasswordCallback={onSuccessResetPasswordCallback}
      />
    </StyledKeyboardAwareScrollView>
  );
};
