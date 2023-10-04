import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { Auth, signInWithEmailAndPassword } from 'firebase/auth';
import { useCallback } from 'react';

import { EmailPasswordData } from '../../../types';

export const useEmailSignIn = (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  auth: Auth,
) => {
  return {
    signIn: useCallback(
      async (_data: EmailPasswordData) => {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          _data.email,
          _data.password,
        );

        const { user } = userCredential;
        const { uid } = user;

        return {
          uid,
        };
      },
      [auth],
    ),
  };
};
