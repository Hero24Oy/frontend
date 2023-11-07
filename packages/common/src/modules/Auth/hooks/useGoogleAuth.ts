import { makeRedirectUri } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import Constants from 'expo-constants';
import { GoogleAuthProvider, OAuthCredential } from 'firebase/auth';
import { useCallback, useEffect } from 'react';
import { Platform } from 'react-native';

import { WithCallback } from './types';

type GoogleAuthConfig = {
  androidClientId: string;
  iosClientId: string;
  webClientId: string;
} & WithCallback;

type UseGoogleAuth = (config: GoogleAuthConfig) => {
  signInWithGoogle: () => Promise<void>;
};

// * We need to create redirect URI for android, otherwise it redirects to `scheme://oauthredirect`
// * https://github.com/expo/expo/issues/22662#issuecomment-1704703426
const REDIRECT_URI =
  Platform.OS === 'android'
    ? makeRedirectUri({
        scheme: Constants.expoConfig?.android?.package,
        path: '/sign-in',
      })
    : undefined;

// TODO remove onAuthSucceed callback and use useAuthentication hook here
export const useGoogleAuth: UseGoogleAuth = (config) => {
  const { onAuthSucceed, onAuthFailed, ...googleAuthConfig } = config;
  const { webClientId, iosClientId, androidClientId } = googleAuthConfig;

  const [_request, response, promptAsync] = Google.useIdTokenAuthRequest({
    redirectUri: REDIRECT_URI,
    androidClientId,
    iosClientId,
    webClientId,
  });

  const signInWithGoogle = useCallback(async () => {
    try {
      await promptAsync();
    } catch (error) {
      console.error(error);

      if (error instanceof Error) {
        onAuthFailed?.(error);
      } else {
        onAuthFailed?.(new Error('Unknown error'));
      }
    }
  }, [promptAsync]);

  // * Expo auth session is not well documented
  // * Github issues about id_token being undefined
  // * https://github.com/expo/expo/issues/12808#issuecomment-1002245022
  // * that's why we are using response from Google.useIdTokenAuthRequest instead of response from promptAsync
  useEffect(() => {
    if (response?.type !== 'success') {
      return;
    }

    const credentials: OAuthCredential = GoogleAuthProvider.credential(
      response.params.id_token,
    );

    onAuthSucceed?.(credentials).catch((error) => console.error(error));
  }, [onAuthSucceed, response]);

  return { signInWithGoogle };
};
