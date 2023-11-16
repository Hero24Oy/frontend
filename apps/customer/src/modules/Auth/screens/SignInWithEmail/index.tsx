import { FC } from 'react';

import { SignInWithEmailScreen as CommonSignInWithEmailScreen } from '@hero24/common';

import { useLogic } from './useLogic';

export const SignInWithEmailScreen: FC = () => {
  const props = useLogic();

  return <CommonSignInWithEmailScreen {...props} />;
};
