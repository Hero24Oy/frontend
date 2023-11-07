import { FC } from 'react';

import { SignInWithEmailScreen } from '@hero24/common';

import { useLogic } from './useLogic';

export const SignInWithEmail: FC = () => {
  const props = useLogic();

  return <SignInWithEmailScreen {...props} />;
};
