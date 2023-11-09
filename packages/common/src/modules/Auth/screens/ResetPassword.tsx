import { FC } from 'react';

import {
  ResetPasswordForm,
  ResetPasswordFormProps,
  ResetPasswordMessage,
} from '../components';

import { StackKeyboardAwareScrollView } from '$common';

type Props = ResetPasswordFormProps;

export const ResetPasswordScreen: FC<Props> = (props) => {
  return (
    <StackKeyboardAwareScrollView>
      <ResetPasswordMessage />
      <ResetPasswordForm {...props} />
    </StackKeyboardAwareScrollView>
  );
};
