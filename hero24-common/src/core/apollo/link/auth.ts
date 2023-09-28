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

    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- Headers are of type Record<string,any>, so this is safe
      headers: {
        ...headers,
        authorization,
      },
    };
  });
};
