// eslint-disable-next-line eslint-comments/disable-enable-pair -- TODO remove
/* eslint-disable @typescript-eslint/explicit-function-return-type -- TODO remove it later */
import * as Google from 'expo-auth-session/providers/google';
import {
  GoogleAuthProvider,
  OAuthCredential,
  signInWithCredential,
} from 'firebase/auth';
import { useEffect } from 'react';

import { Config, SignInWithGoogle } from '../types';

// TODO think about simple signInWithProvider hook that takes provider as function or something, calls it and just uses uid returned from it
// TODO convert to obj
export const useGoogleAuth = (config: Config): SignInWithGoogle => {
  const { firebaseAuth, googleAuth } = config;

  const [_request, response, promptAsync] = Google.useIdTokenAuthRequest({
    androidClientId: googleAuth.androidClientId,
    iosClientId: googleAuth.iosClientId,
    webClientId: googleAuth.webClientId,
  });

  // * Expo auth session is not well documented
  // * Github issues about id_token being undefined
  // * https://github.com/expo/expo/issues/12808#issuecomment-1002245022
  // * that's why we are using response from Google.useIdTokenAuthRequest instead of response from promptAsync

  useEffect(() => {
    if (!response) {
      return;
    }

    console.debug('response', response);

    if (response?.type !== 'success') {
      return;
    }

    const credentials: OAuthCredential = GoogleAuthProvider.credential(
      response.params.id_token,
    );

    console.debug('credentials', credentials);

    signInWithCredential(firebaseAuth, credentials)
      .then((res) => {
        console.debug('signin with credential');
        console.debug('res', res);
      })
      .catch((err) => console.error('err', err));
  }, [firebaseAuth, response]);

  return () => promptAsync();
};
