import { ResetPasswordFormText } from 'modules/Auth/components';
import { ResetPasswordForm, ResetPasswordFormProps } from 'modules/Auth/forms';
import { FC } from 'react';

import { StackKeyboardAwareView } from '@hero24/ui';

type Props = ResetPasswordFormProps;

export const ResetPasswordScreen: FC<Props> = (props) => {
  const { onSuccessResetPasswordHandler } = props;

  return (
    <StackKeyboardAwareView>
      <ResetPasswordFormText />
      <ResetPasswordForm
        onSuccessResetPasswordHandler={onSuccessResetPasswordHandler}
      />
    </StackKeyboardAwareView>
  );
};
