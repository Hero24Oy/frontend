import { useApolloClient } from '@apollo/client';
import { useCallback } from 'react';

import { useFirebaseAuth } from '../store';

type UseLogout = () => () => Promise<void>;

export const useLogout: UseLogout = () => {
  const firebaseAuth = useFirebaseAuth();
  const apolloClient = useApolloClient();

  const handleLogout = useCallback(async () => {
    // await deletePushToken(firebaseAuth.currentUser?.uid, 'all'); // TODO Add expo push token here
    await Promise.all([firebaseAuth.signOut(), apolloClient.clearStore()]);
  }, []);

  return handleLogout;
};
