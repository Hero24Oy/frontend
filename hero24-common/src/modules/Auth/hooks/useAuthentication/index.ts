// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, eslint-comments/disable-enable-pair, eslint-comments/no-duplicate-disable -- TODO remove it later
/* eslint-disable @typescript-eslint/explicit-function-return-type  -- TODO remove it later */
import { useEmailSignIn, useEmailSignUp, useGoogleAuth } from './providers';
import { Config, SignInWithProvider } from './types';

/**
 *
 * @description useAuthentication hook should only return user uid, by which we can get user data from server
 */
export const useAuthentication = (config: Config) => {
  const { firebaseAuth } = config;

  const signInWithEmail = useEmailSignIn(firebaseAuth);
  const signUpWithEmail = useEmailSignUp(firebaseAuth);
  const signInWithGoogle = useGoogleAuth(config);

  const providers = {
    signInWithEmail,
    signUpWithEmail,
    signInWithGoogle,
  } satisfies Record<string, SignInWithProvider>;

  return {
    providers,
  };
};
