import { useCachedGraphQlUser, useLogout, User } from '@hero24/common';

type UseLogic = () => {
  logout: () => Promise<void>;
  user: User;
};

export const useLogic: UseLogic = () => {
  const logout = useLogout();
  const { user } = useCachedGraphQlUser();

  return {
    logout,
    user,
  };
};
