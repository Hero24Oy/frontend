// eslint-disable-next-line eslint-comments/disable-enable-pair -- TODO remove
/* eslint-disable @typescript-eslint/explicit-function-return-type -- TODO remove it later */
import { makeRedirectUri } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import Constants from 'expo-constants';
import {
  GoogleAuthProvider,
  OAuthCredential,
  signInWithCredential,
} from 'firebase/auth';
import { useEffect } from 'react';
import { Platform } from 'react-native';

import { Config, SignInWithGoogle } from '../types';

export const useGoogleAuth = (config: Config): SignInWithGoogle => {
  const { firebaseAuth, googleAuth } = config;

  const [_request, response, promptAsync] = Google.useIdTokenAuthRequest({
    androidClientId: googleAuth.androidClientId,
    iosClientId: googleAuth.iosClientId,
    webClientId: googleAuth.webClientId,
    // * We need to create redirect URI for android, otherwise it redirects to `scheme://oauthredirect`
    // * https://github.com/expo/expo/issues/22662#issuecomment-1704703426
    redirectUri:
      Platform.OS === 'android'
        ? makeRedirectUri({
            scheme: Constants.expoConfig?.android?.package,
            path: '/login',
          })
        : undefined,
  });

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

  return () => promptAsync();
};
