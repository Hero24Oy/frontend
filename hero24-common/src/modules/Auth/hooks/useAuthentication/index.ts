import { useCallback } from 'react';

import {
  useAppleAuth,
  useEmailSignIn,
  useEmailSignUp,
  useFacebookAuth,
  useGoogleAuth,
} from './providers';

// TODO: create interface for return
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type -- TODO remove it later
export const useAuthentication = () => {
  const { signIn: signInApple } = useAppleAuth();
  const { signIn: signInGoogle } = useGoogleAuth();
  const { signIn: signInFacebook } = useFacebookAuth();
  const { signIn: signInEmail } = useEmailSignIn();
  const { signUp: signUpEmail } = useEmailSignUp();

  const logoutHandler = useCallback(() => {
    // dispatch(logout()); // TODO clear store here and use deletePushToken hook
  }, []);

  const providers = {
    signInApple,
    signInFacebook,
    signInGoogle,
    signInEmail,
    signUpEmail,
  };

  return {
    providers,
    authenticating: false,
    logOuting: false,
    logout: logoutHandler,
  };
};
