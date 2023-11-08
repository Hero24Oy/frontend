import { useCachedGraphQlUser, useLogout } from '@hero24/common';

export const useLogic = () => {
  const logout = useLogout();

  const { user } = useCachedGraphQlUser();

  return {
    logout,
    user,
  };
};
