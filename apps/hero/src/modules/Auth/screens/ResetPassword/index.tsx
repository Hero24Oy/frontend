import { FC } from 'react';

import { ResetPasswordScreen as CommonResetPasswordScreen } from '@hero24/common';

import { useLogic } from './useLogic';

export const ResetPasswordScreen: FC = () => {
  const props = useLogic();

  return <CommonResetPasswordScreen {...props} />;
};
