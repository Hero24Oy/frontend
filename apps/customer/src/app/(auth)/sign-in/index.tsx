import React, { FC } from 'react';

import { AuthScreen } from '@hero24/common';

import { authConfig } from '$/configs';

const SignIn: FC = () => {
  return <AuthScreen authConfig={authConfig} />;
};

export default SignIn;
