import { makeRedirectUri } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import Constants from 'expo-constants';
import {
  GoogleAuthProvider,
  OAuthCredential,
  signInWithCredential,
} from 'firebase/auth';
import { useCallback, useEffect } from 'react';
import { Platform } from 'react-native';

import { Config, SignInWithGoogle } from '../types';

// * We need to create redirect URI for android, otherwise it redirects to `scheme://oauthredirect`
// * https://github.com/expo/expo/issues/22662#issuecomment-1704703426
const REDIRECT_URI =
  Platform.OS === 'android'
    ? makeRedirectUri({
        scheme: Constants.expoConfig?.android?.package,
        path: '/login',
      })
    : undefined;

export const useGoogleAuth = (config: Config): SignInWithGoogle => {
  const { firebaseAuth, googleAuth } = config;

  const [_request, response, promptAsync] = Google.useIdTokenAuthRequest({
    androidClientId: googleAuth.androidClientId,
    iosClientId: googleAuth.iosClientId,
    webClientId: googleAuth.webClientId,
    redirectUri: REDIRECT_URI,
  });

  const handlerPrompt = useCallback(async () => {
    await promptAsync();
  }, [promptAsync]);

  // * Expo auth session is not well documented
  // * Github issues about id_token being undefined
  // * https://github.com/expo/expo/issues/12808#issuecomment-1002245022
  // * that's why we are using response from Google.useIdTokenAuthRequest instead of response from promptAsync
  useEffect(() => {
    if (!response) {
      return;
    }

    if (response?.type !== 'success') {
      return;
    }

    const credentials: OAuthCredential = GoogleAuthProvider.credential(
      response.params.id_token,
    );

    signInWithCredential(firebaseAuth, credentials).catch((err) =>
      console.error('err', err),
    );
  }, [firebaseAuth, response]);

  return handlerPrompt;
};
