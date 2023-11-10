import { ResponseType } from 'expo-auth-session';
import * as Facebook from 'expo-auth-session/providers/facebook';
import { FacebookAuthProvider, OAuthCredential } from 'firebase/auth';
import { useCallback, useEffect } from 'react';

import { WithCallback } from '../types';

import { parseError } from '$core';

type FacebookAuthConfig = {
  facebookAppId: string;
} & WithCallback;

type UseFacebookAuth = (config: FacebookAuthConfig) => {
  signInWithFacebook: () => Promise<void>;
};

export const useFacebookAuth: UseFacebookAuth = (params) => {
  const { onAuthFailed, onAuthSucceed, ...facebookAuthConfig } = params;

  const [_request, response, promptAsync] = Facebook.useAuthRequest({
    responseType: ResponseType.Token,
    clientId: facebookAuthConfig.facebookAppId,
  });

  const signInWithFacebook = useCallback(async () => {
    try {
      await promptAsync();
    } catch (error) {
      const parsedError = parseError(error);

      onAuthFailed?.(parsedError);
    }
  }, [promptAsync]);

  // * Expo auth session is not well documented
  // * Github issues about id_token being undefined
  // * https://github.com/expo/expo/issues/12808#issuecomment-1002245022
  // * that's why we are using response from Facebook.useAuthRequest instead of response from promptAsync
  useEffect(() => {
    if (response?.type !== 'success') {
      return;
    }

    void (async () => {
      try {
        const credentials: OAuthCredential = FacebookAuthProvider.credential(
          response.params.id_token,
        );

        await onAuthSucceed?.(credentials);
      } catch (error) {
        const parsedError = parseError(error);

        onAuthFailed?.(parsedError);
      }
    })();
  }, [onAuthSucceed, onAuthFailed, response]);

  return { signInWithFacebook };
};
