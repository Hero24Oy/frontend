import { Redirect } from 'expo-router';
import React, { FC } from 'react';
import { Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useFirebaseUser } from '$common';
import { AppleAuth, EmailAuth, FacebookAuth, GoogleAuth } from '$modules';

const SignIn: FC = () => {
  const { user } = useFirebaseUser();

  if (user) {
    return <Redirect href="/profile" />;
  }

  return (
    <SafeAreaView>
      {Platform.OS !== 'ios' && <AppleAuth />}
      <GoogleAuth />
      <FacebookAuth />
      <EmailAuth />
    </SafeAreaView>
  );
};

export default SignIn;
