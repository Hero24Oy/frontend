import { FC } from 'react';

import { ResetPasswordScreen } from '@hero24/common';

import { useLogic } from './useLogic';

export const ResetPassword: FC = () => {
  const props = useLogic();

  return <ResetPasswordScreen {...props} />;
};
