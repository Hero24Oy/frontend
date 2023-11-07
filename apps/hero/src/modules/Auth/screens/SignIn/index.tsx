import { FC } from 'react';

import { SignInScreen } from '@hero24/common';

import { useLogic } from './useLogic';

export const SignIn: FC = () => {
  const props = useLogic();

  return <SignInScreen {...props} />;
};
