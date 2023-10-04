// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, eslint-comments/disable-enable-pair, eslint-comments/no-duplicate-disable -- TODO remove it later
/* eslint-disable @typescript-eslint/explicit-function-return-type  -- TODO remove it later */
import { GoogleAuthRequestConfig } from 'expo-auth-session';
import { Auth } from 'firebase/auth';

import { useEmailSignIn, useEmailSignUp, useGoogleAuth } from './providers';
import { SignInWithProvider } from './types';

// TODO: create interface for return
type Config = {
  firebaseAuth: Auth;
  googleAuth: GoogleAuthRequestConfig;
};

export const useAuthentication = (config: Config) => {
  const { firebaseAuth, googleAuth } = config;

  const signInWithEmail = useEmailSignIn(firebaseAuth);
  const signUpWithEmail = useEmailSignUp(firebaseAuth);
  const signInWithGoogle = useGoogleAuth(googleAuth);

  const providers = {
    signInWithEmail,
    signUpWithEmail,
    signInWithGoogle, // TODO better naming as it both registers and signs in
  } satisfies Record<string, SignInWithProvider>;

  return {
    providers,
  };
};
