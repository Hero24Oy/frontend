import { useEmailSignIn, useEmailSignUp, useGoogleAuth } from './providers';
import { Config, SignInWithProvider } from './types';

/**
 *
 * @description useAuthentication hook should only return authenticate user via firebase
 * The rest logic is handler by listening to authStatusChanged in auth provider
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, eslint-comments/disable-enable-pair, eslint-comments/no-duplicate-disable -- // * Couldn't find a way to provide nice return type
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
