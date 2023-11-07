import { useCachedGraphQlUser, useLogout, User } from '@hero24/common';

export type UseProfile = () => {
  logout: () => Promise<void>;
  user: User;
};

export const useProfile: UseProfile = () => {
  const logout = useLogout();
  const { user } = useCachedGraphQlUser();

  return {
    logout,
    user,
  };
};
