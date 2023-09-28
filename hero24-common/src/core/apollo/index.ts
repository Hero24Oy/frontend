import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

import { createLink } from './link';
import { CreateApolloClientOptions } from './types';

export * from './constants';
export * from './hooks';
export * from './types';

export const createApolloClient = (
  options: CreateApolloClientOptions,
): ApolloClient<NormalizedCacheObject> => {
  const { cache, getAuthToken, serverUrl } = options;

  const link = createLink({ getAuthToken, serverUrl });

  const apolloClient = new ApolloClient({
    link,
    cache: new InMemoryCache({
      ...cache,
    }),
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
