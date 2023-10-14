import { ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { LinksOptions } from '../types';

export const createAuthLink = (
  options: Pick<LinksOptions, 'getAuthToken'>,
): ApolloLink => {
  const { getAuthToken } = options;

  return setContext(async (_, { headers }) => {
    // * get the authentication token from firebase if it exists
    const authorization = await getAuthToken();

    const headersWithAuth = { ...headers, authorization } as Record<
      string,
      string
    >;

    return {
      headers: headersWithAuth,
    };
  });
};
