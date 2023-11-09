import { FC } from 'react';

import {
  ResetPasswordForm,
  ResetPasswordFormProps,
  ResetPasswordScreenText,
} from '../components';

import { StackKeyboardAwareScrollView } from '$common';

type Props = ResetPasswordFormProps;

export const ResetPasswordScreen: FC<Props> = (props) => {
  return (
    <StackKeyboardAwareScrollView>
      <ResetPasswordScreenText />
      <ResetPasswordForm {...props} />
    </StackKeyboardAwareScrollView>
  );
};
