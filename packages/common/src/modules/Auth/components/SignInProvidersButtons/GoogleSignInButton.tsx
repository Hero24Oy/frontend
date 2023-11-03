import { FC } from 'react';

import {
  // AppleIcon,
  Button,
  View,
} from '@hero24/ui';

import { useAuthentication, useGoogleAuth } from '../../hooks';

import { useEnvConfig } from '$common/core';

export const GoogleSignInButton: FC = () => {
  const { signInWithCredentials } = useAuthentication();

  const { ANDROID_CLIENT_ID, IOS_CLIENT_ID, WEB_CLIENT_ID } = useEnvConfig();

  // TODO testing credentials, remove before PR
  const { signInWithGoogle } = useGoogleAuth({
    webClientId: WEB_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    androidClientId: ANDROID_CLIENT_ID,
    onAuthSucceed: signInWithCredentials,
  });

  // TODO use i18next
  return (
    <View>
      <Button variant="outline" size="md" onPress={signInWithGoogle}>
        Continue with Google
      </Button>
      {/* <AppleIcon /> */}
    </View>
  );
};

// TODO apple icon fix svg
