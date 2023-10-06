import { Auth, signInWithCredential } from 'firebase/auth';
import { useCallback } from 'react';

import { SignInWithCredentials } from './types';

type UseAuthentication = (firebaseAuth: Auth) => {
  signInWithCredentials: SignInWithCredentials;
};

/**
 *
 * @description useAuthentication hook should only return authenticate user via firebase
 * The rest logic is handler by listening to authStatusChanged in auth provider
 */
export const useAuthentication: UseAuthentication = (firebaseAuth) => {
  const signInWithCredentials: SignInWithCredentials = useCallback(
    async (credentials) => {
      try {
        const response = await signInWithCredential(firebaseAuth, credentials);

        return response;
      } catch (error) {
        console.error(error);

        return undefined;
      }
    },
    [firebaseAuth],
  );

  return {
    signInWithCredentials,
  };
};
