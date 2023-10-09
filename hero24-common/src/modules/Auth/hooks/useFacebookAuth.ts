import { ResponseType } from 'expo-auth-session';
import * as Facebook from 'expo-auth-session/providers/facebook';
import { FacebookAuthProvider, OAuthCredential } from 'firebase/auth';
import { useCallback, useEffect } from 'react';

import { OnAuthSucceed } from './types';

type FacebookAuthConfig = {
  facebookAppId: string;
} & OnAuthSucceed;

type UseFacebookAuth = (config: FacebookAuthConfig) => {
  signInWithFacebook: () => Promise<void>;
};

export const useFacebookAuth: UseFacebookAuth = (config) => {
  const { onAuthSucceed, ...facebookAuthConfig } = config;

  const [_request, response, promptAsync] = Facebook.useAuthRequest({
    responseType: ResponseType.Token,
    clientId: facebookAuthConfig.facebookAppId,
  });

  const signInWithFacebook = useCallback(async () => {
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

  return { signInWithFacebook };
};
