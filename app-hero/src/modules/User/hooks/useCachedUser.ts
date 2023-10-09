import { auth } from '$/core';
import { useGetUser, User } from '$common';

type UseCachedUser = () => {
  user: User;
};

// * We should use it only when authenticated
export const useCachedUser: UseCachedUser = () => {
  const { getUser } = useGetUser({
    variables: {
      id: auth.currentUser?.uid ?? '',
    },
  });

  return { user: getUser.data };
};
