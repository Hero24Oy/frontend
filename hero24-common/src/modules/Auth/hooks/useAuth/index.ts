// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-explicit-any -- Will be dealt with in next PR */
import { useCallback } from 'react';

// import { useDispatch, useSelector } from 'react-redux';
import {
  useAppleAuth,
  useEmailSignIn,
  useEmailSignUp,
  useFacebookAuth,
  useGoogleAuth,
} from './providers';

// import { logout } from '$modules/Auth/actions';
// import {
//   selectAuthAuthenticating,
//   selectAuthLogOuting,
// } from '$modules/Auth/selectors';

// TODO: create interface for return
export const useAuth = (): Record<string, any> => {
  // const dispatch = useDispatch();
  // const isAuthenticating = useSelector(selectAuthAuthenticating);
  // const isLogOuting = useSelector(selectAuthLogOuting);

  const { signIn: signInApple } = useAppleAuth();
  const { signIn: signInGoogle } = useGoogleAuth();
  const { signIn: signInFacebook } = useFacebookAuth();
  const { signIn: signInEmail } = useEmailSignIn();
  const { signUp: signUpEmail } = useEmailSignUp();

  const logoutHandler = useCallback(() => {
    // dispatch(logout());
  }, []);

  const providers = {
    signInApple,
    signInFacebook,
    signInGoogle,
    signInEmail,
    signUpEmail,
  } satisfies Record<string, (...args: any) => unknown>;

  return {
    providers,
    authenticating: false,
    logOuting: false,
    logout: logoutHandler,
  };
  // return {
  //   providers,
  //   authenticating: isAuthenticating,
  //   logOuting: isLogOuting,
  //   logout: logoutHandler,
  // };
};
