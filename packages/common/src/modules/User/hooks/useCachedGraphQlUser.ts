import { useFirebaseUser } from '../../Auth';
import { GetUserResponse, useGetUser } from '../graphql';

type UseCachedGraphQlUser = () => {
  user: GetUserResponse;
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
