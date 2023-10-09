import { useFirebaseUser } from '$/core';
import { useGetUser, User } from '$common';

type UseCachedGraphQlUser = () => {
  user: User;
};

// * We should use it only when authenticated
export const useCachedGraphQlUser: UseCachedGraphQlUser = () => {
  const { user } = useFirebaseUser();

  const { getUser } = useGetUser({
    variables: {
      id: user?.uid ?? '',
    },
  });

  return { user: getUser.data };
};
