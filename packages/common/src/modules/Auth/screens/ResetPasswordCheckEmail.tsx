import { StyledKeyboardAwareScrollView } from 'core/components';
import { FC } from 'react';

import { ResetPasswordCheckEmailContent } from '../components';

export const ResetPasswordCheckEmailScreen: FC = () => {
  // TODO -- replace with store email getter
  const testEmail = 'testEmail@gmail.com';

  return (
    <StyledKeyboardAwareScrollView>
      <ResetPasswordCheckEmailContent email={testEmail} />
    </StyledKeyboardAwareScrollView>
  );
};
