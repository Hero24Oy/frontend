import {
  OAuthCredential,
  signInWithCredential,
  UserCredential,
} from 'firebase/auth';
import { useCallback } from 'react';

import { useFirebaseAuth } from '../stores';

export type SignInWithCredentials = (
  credentials: OAuthCredential,
) => Promise<UserCredential | undefined>;

type UseAuthentication = () => {
  signInWithCredentials: SignInWithCredentials;
};

/**
 *
 * @description useAuthentication hook should only return authenticate user via firebase
 * The rest logic is handler by listening to authStatusChanged in auth provider
 */
export const useAuthentication: UseAuthentication = () => {
  const firebaseAuth = useFirebaseAuth();

  const signInWithCredentials: SignInWithCredentials = useCallback(
    async (credentials) => {
      return signInWithCredential(firebaseAuth, credentials);
    },
    [firebaseAuth],
  );

  return {
    signInWithCredentials,
  };
};
