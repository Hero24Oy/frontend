import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { useDeletePushToken, useGetUser, User } from '../User';

import { AuthContextProps, AuthProviderProps } from './types';

const initialState: AuthContextProps = {
  accessToken: null,
  isLoading: true,
  logout: () => Promise.resolve(),
  firebaseAuth: null,
  user: null,
};

export const AuthContext = createContext<AuthContextProps>(initialState);

// * Apollo provider should be higher
export const AuthProvider: FC<PropsWithChildren<AuthProviderProps>> = (
  props,
) => {
  const { children, firebaseAuth } = props;
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { getUser } = useGetUser({ skip: true });
  const deletePushToken = useDeletePushToken(user?.id ?? '');

  const logout = useCallback(async () => {
    await deletePushToken('all'); // TODO Add expo push token here
    await firebaseAuth.signOut();

    // * Reset store
    setAccessToken(null);
    setUser(null);

    // * Clear store only after all actions, because some of them rely on cached data
    await getUser.client.clearStore();
  }, [deletePushToken, firebaseAuth, getUser.client]);

  const contextValue = useMemo(
    () =>
      ({
        firebaseAuth,
        isLoading,
        accessToken,
        user,
        logout,
      }) satisfies AuthContextProps,
    [accessToken, firebaseAuth, isLoading, logout, user],
  );

  useEffect(() => {
    // * onAuthStateChanged is triggered on app start and on every login/logout
    firebaseAuth.onAuthStateChanged((newState) => {
      if (!newState) {
        setUser(null);
        setAccessToken(null);
        setIsLoading(false);

        return;
      }

      getUser
        .refetch({
          id: newState.uid,
        })
        .then((response) => {
          const newUser = response.data.response;

          setUser(newUser);

          return newState.getIdToken(); // * Get jwt token for auth
        })
        .then((jwtToken) => {
          setAccessToken(jwtToken);
          setIsLoading(false);
        })
        .catch((error) => console.error(error));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- De need this to run only once, when app starts
  }, []);

  // * Listen to auth state changes
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
