import { ResponseType } from 'expo-auth-session';
import * as Facebook from 'expo-auth-session/providers/facebook';
import { FacebookAuthProvider, OAuthCredential } from 'firebase/auth';
import { useCallback, useEffect } from 'react';

import { OnAuthSucceed } from './types';

/*
 * Facebook auth won't work in dev mode, unless dev app is created
 * Because localhost redirects are not allowed
 * Link for auth redirect in facebook app is created next way
 * https://com.hero24.app/ - scheme of app
 * expo-development-client/?url=http%3A%2F%2F192.168.50.172%3A8081 - url on which app runs
 * https://com.hero24.app/expo-development-client/?url=http%3A%2F%2F192.168.50.172%3A8081
 *
 * Tutorial how to make it work
 * https://youtu.be/Ea7--DkHFPo?si=2mSE6UwF9stSVzR3&t=897
 */
type FacebookAuthConfig = {
  facebookAppId: string;
} & OnAuthSucceed;

type UseeFacebookAuth = (config: FacebookAuthConfig) => () => Promise<void>;

export const useFacebookAuth: UseeFacebookAuth = (config) => {
  const { onAuthSucceed, ...facebookAuthConfig } = config;

  const [_request, response, promptAsync] = Facebook.useAuthRequest({
    responseType: ResponseType.Token,
    clientId: facebookAuthConfig.facebookAppId,
  });

  const handleSignIn = useCallback(async () => {
    try {
      await promptAsync();
    } catch (error) {
      console.error(error);
    }
  }, [promptAsync]);

  // * Expo auth session is not well documented
  // * Github issues about id_token being undefined
  // * https://github.com/expo/expo/issues/12808#issuecomment-1002245022
  // * that's why we are using response from Facebook.useAuthRequest instead of response from promptAsync
  useEffect(() => {
    if (!response) {
      return;
    }

    if (response?.type !== 'success') {
      return;
    }

    const credentials: OAuthCredential = FacebookAuthProvider.credential(
      response.params.access_token,
    );

    onAuthSucceed(credentials).catch((error) => console.error(error));
  }, [onAuthSucceed, response]);

  return handleSignIn;
};
