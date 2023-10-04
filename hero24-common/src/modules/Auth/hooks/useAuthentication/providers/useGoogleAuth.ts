// eslint-disable-next-line eslint-comments/disable-enable-pair -- TODO remove
/* eslint-disable @typescript-eslint/explicit-function-return-type -- TODO remove it later */
import * as Google from 'expo-auth-session/providers/google';

import { SignInWithGoogle } from '../types';

export const useGoogleAuth = (
  config: Google.GoogleAuthRequestConfig,
): SignInWithGoogle => {
  const [_request, response, promptAsync] =
    Google.useIdTokenAuthRequest(config);

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

  const requestHandler = async () => {
    const authResult = await promptAsync({});

    if (response?.type !== 'success') {
      return;
    }

    console.debug('response', response);
    console.debug(authResult);
  };

  return requestHandler;
};
