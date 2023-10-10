import { View } from '@gluestack-ui/themed';
import { Redirect } from 'expo-router';
import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useFirebaseUser } from '$common';
import { AppleAuth, EmailAuth, FacebookAuth, GoogleAuth } from '$modules';

const Login: FC = () => {
  const { user } = useFirebaseUser();

  if (user) {
    return <Redirect href="/profile" />;
  }

  return (
    <SafeAreaView>
      <View>
        <AppleAuth />
        <GoogleAuth />
        <FacebookAuth />
        <EmailAuth />
      </View>
    </SafeAreaView>
  );
};

export default Login;
