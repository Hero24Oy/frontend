import { ResetPasswordCheckEmailContent } from 'modules/Auth/components';
import { FC } from 'react';

import { StackKeyboardAwareView } from '@hero24/ui';

export const ResetPasswordCheckEmailScreen: FC = () => {
  const testEmail = 'testEmail@gmail.com';

  return (
    <StackKeyboardAwareView>
      <ResetPasswordCheckEmailContent email={testEmail} />
    </StackKeyboardAwareView>
  );
};
