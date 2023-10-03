import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { useCallback } from 'react';

import { useDeletePushToken } from '../../../User';

type LogoutHandler = (
  apolloClient: ApolloClient<NormalizedCacheObject>,
) => Promise<void>;

export const useLogout = (): LogoutHandler => {
  const removeToken = useDeletePushToken();

  const logoutHandler: LogoutHandler = useCallback(
    async (apolloClient) => {
      const token = 'token'; // TODO get firebase token

      await removeToken(token);

      await apolloClient.clearStore();
    },
    [removeToken],
  );

  return logoutHandler;
};
