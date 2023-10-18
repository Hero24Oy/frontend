import React, { FC } from 'react';

import { AuthScreen } from '@hero24/ui/src/modules/auth/screens';

// import { Platform } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// import { AppleAuth, EmailAuth, FacebookAuth, GoogleAuth } from '$modules';

const SignIn: FC = () => {
  return (
    // <SafeAreaView>
    //   {Platform.OS === 'ios' && <AppleAuth />}
    //   <GoogleAuth />
    //   <FacebookAuth />
    //   <EmailAuth />
    // </SafeAreaView>
    <AuthScreen />
  );
};

export default SignIn;
