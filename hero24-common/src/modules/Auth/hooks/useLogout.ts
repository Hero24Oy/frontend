import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { Auth } from 'firebase/auth';
import { useCallback } from 'react';

type LogoutProps = {
  apolloClient: ApolloClient<NormalizedCacheObject>;
  firebaseAuth: Auth;
};

type UseLogout = () => (props: LogoutProps) => Promise<void>;

export const useLogout: UseLogout = () => {
  const handleLogout = useCallback(async (props: LogoutProps) => {
    const { apolloClient, firebaseAuth } = props;

    // await deletePushToken(firebaseAuth.currentUser?.uid, 'all'); // TODO Add expo push token here
    await Promise.all([firebaseAuth.signOut(), apolloClient.clearStore()]);
  }, []);

  return handleLogout;
};
