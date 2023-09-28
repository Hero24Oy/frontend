import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import { createCache } from './cache';
import { createLink } from './link';
import { CreateApolloClientOptions } from './types';

export * from './constants';
export * from './hooks';
export * from './types';
export * from './link';

export const createApolloClient = (
  options: CreateApolloClientOptions,
): ApolloClient<NormalizedCacheObject> => {
  const { getAuthToken, serverUrl, cache } = options;

  const link = createLink({ getAuthToken, serverUrl });

  const apolloClient = new ApolloClient({
    link,
    cache: createCache(cache),
    defaultOptions: {
      query: {
        errorPolicy: 'all',
        fetchPolicy: 'cache-first',
      },
      mutate: {
        errorPolicy: 'all',
      },
    },
  });

  return apolloClient;
};
