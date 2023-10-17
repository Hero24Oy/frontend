import React, { FC } from 'react';
import { Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppleAuth, EmailAuth, FacebookAuth, GoogleAuth } from '$modules';

const SignIn: FC = () => {
  return (
    <SafeAreaView>
      {Platform.OS === 'ios' && <AppleAuth />}
      <GoogleAuth />
      <FacebookAuth />
      <EmailAuth />
    </SafeAreaView>
  );
};

export default SignIn;
