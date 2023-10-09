import { useApolloClient } from '@apollo/client';
import { Auth } from 'firebase/auth';
import { useCallback } from 'react';

type LogoutProps = {
  firebaseAuth: Auth;
};

type UseLogout = () => (props: LogoutProps) => Promise<void>;

export const useLogout: UseLogout = () => {
  const apolloClient = useApolloClient();

  const handleLogout = useCallback(async (props: LogoutProps) => {
    const { firebaseAuth } = props; // TODO ? Could we create FirebaseAuthProvider and create hook useFirebaseAuth to detach logic even more?

    // await deletePushToken(firebaseAuth.currentUser?.uid, 'all'); // TODO Add expo push token here
    await Promise.all([firebaseAuth.signOut(), apolloClient.clearStore()]);
  }, []);

  return handleLogout;
};
