import { Auth } from 'firebase/auth';
import { FC, PropsWithChildren, useEffect } from 'react';

import { useGetUser } from '../User';

type AuthProviderProps = {
  firebaseAuth: Auth;
};

// * Apollo provider should be higher
// TODO add auth provider to common providers combiner when firebase is migrated to common
export const AuthProvider: FC<PropsWithChildren<AuthProviderProps>> = (
  props,
) => {
  const { children, firebaseAuth } = props;

  // TODO replace with lazy query
  const { getUser } = useGetUser({ skip: true });

  const fetchUser = async (): Promise<void> => {
    if (!firebaseAuth.currentUser) {
      return;
    }

    console.debug('sending request');

    const userData = await getUser.refetch({
      id: firebaseAuth.currentUser.uid,
    });

    console.debug('userData', userData);
  };

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((newState) => {
      console.debug('newState', newState);
      fetchUser().catch((error) => console.error(error));
    });
  }, []);

  // * Listen to auth state changes
  return children;
};
