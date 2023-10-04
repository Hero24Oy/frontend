/* eslint-disable eslint-comments/disable-enable-pair -- TODO remove later */
/* eslint-disable eslint-comments/require-description  -- TODO remove later */
/* eslint-disable no-empty-function -- TODO remove later */
/* eslint-disable @typescript-eslint/explicit-function-return-type -- TODO remove later */
// import { authConfig } from 'config';
// import { AuthSessionResult, ResponseType } from 'expo-auth-session';
// import * as Facebook from 'expo-auth-session/providers/facebook';
// import { useEffect } from 'react';

// import { useDispatch } from 'react-redux';
// import { signInWithProvider } from '../../../actions';
// import { AppAuthProvider } from '../../../constants';
// import { SignInReturn } from './types';

/*
 * Facebook auth won't work in dev mode
 * Because localhost redirects are not allowed
 * Link for auth redirect in facebook app is created next way
 * https://com.hero24.app/ - scheme of app
 * expo-development-client/?url=http%3A%2F%2F192.168.50.172%3A8081 - url on which app runs
 * https://com.hero24.app/expo-development-client/?url=http%3A%2F%2F192.168.50.172%3A8081
 *
 * Tutorial how to make it work
 * https://youtu.be/Ea7--DkHFPo?si=2mSE6UwF9stSVzR3&t=897
 * */

// TODO
export const useFacebookAuth = () => {
  // const dispatch = useDispatch();

  // const [_request, response, promptAsync] = Facebook.useAuthRequest({
  //   responseType: ResponseType.Token,
  //   // clientId: authConfig.facebookAppId,
  // });

  // * Expo auth session is not well documented
  // * Github issues about id_token being undefined
  // * https://github.com/expo/expo/issues/12808#issuecomment-1002245022
  // * that's why we are using response from Facebook.useAuthRequest instead of response from promptAsync
  // useEffect(() => {
  //   // if (!response) {
  //   //   return;
  //   // }
  //   // dispatch(
  //   //   signInWithProvider({
  //   //     provider: AppAuthProvider.FACEBOOK,
  //   //     options: response,
  //   //   }),
  //   // );
  // }, [response]);

  return {
    signIn: () => {},
  };
};
