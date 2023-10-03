// import { authConfig } from 'config';
// import { AuthSessionResult } from 'expo-auth-session';
// import * as Google from 'expo-auth-session/providers/google';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

import { SignInReturn } from './types';

// import { signInWithProvider } from '$modules/Auth/actions';
// import { AppAuthProvider } from '$modules/Auth/constants';

// export const useGoogleAuth = (): SignInReturn<AuthSessionResult> => {
export const useGoogleAuth = (): SignInReturn => {
  // const dispatch = useDispatch();

  // const [_request, response, promptAsync] =
  //   Google.useIdTokenAuthRequest(authConfig);

  // * Expo auth session is not well documented
  // * Github issues about id_token being undefined
  // * https://github.com/expo/expo/issues/12808#issuecomment-1002245022
  // * that's why we are using response from Google.useIdTokenAuthRequest instead of response from promptAsync
  // useEffect(() => {
  //   if (!response) {
  //     return;
  //   }

  //   dispatch(
  //     signInWithProvider({
  //       provider: AppAuthProvider.GOOGLE,
  //       options: response,
  //     }),
  //   );
  // }, [dispatch, response]);

  return {
    // signIn: () => promptAsync(),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-explicit-any -- Will be dealt with in next PR
    signIn: () => ({}) as any,
  };
};
