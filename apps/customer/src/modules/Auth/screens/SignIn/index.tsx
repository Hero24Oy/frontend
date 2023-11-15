import { FC } from 'react';

import { SignInScreen as CommonSignInScreen } from '@hero24/common';

import { useLogic } from './useLogic';

export const SignInScreen: FC = () => {
  const props = useLogic();

  return <CommonSignInScreen {...props} />;
};
