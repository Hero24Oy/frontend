import { Auth } from 'firebase/auth';

import { useEmailSignIn, useEmailSignUp } from './providers';
import { SignInWithProvider } from './types';

// TODO: create interface for return
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type -- TODO remove it later
export const useAuthentication = (firebaseAuth: Auth) => {
  const signInWithEmail = useEmailSignIn(firebaseAuth);
  const signUpWithEmail = useEmailSignUp(firebaseAuth);

  const providers = {
    signInWithEmail,
    signUpWithEmail,
  } satisfies Record<string, SignInWithProvider>;

  return {
    providers,
  };
};
