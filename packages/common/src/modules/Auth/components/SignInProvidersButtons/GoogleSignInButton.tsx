import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button } from '@hero24/ui';

import { useAuthentication, useGoogleAuth } from '../../hooks';

import { useEnvConfig } from '$common/core';

export const GoogleSignInButton: FC = () => {
  const { signInWithCredentials } = useAuthentication();

  const { ANDROID_CLIENT_ID, IOS_CLIENT_ID, WEB_CLIENT_ID } = useEnvConfig();

  const { signInWithGoogle } = useGoogleAuth({
    webClientId: WEB_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    androidClientId: ANDROID_CLIENT_ID,
    onAuthSucceed: signInWithCredentials,
  });

  // TODO use i18next
  return (
    <Button
      style={styles.button}
      variant="outline"
      size="md"
      onPress={signInWithGoogle}
    >
      Continue with Google
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 44,
  },
});
// TODO apple icon fix svg
