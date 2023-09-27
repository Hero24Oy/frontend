import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

import { link } from './link';
import { FactoryOptions } from './types';

export * from './constants';
export * from './hooks';
export * from './types';

// ? Take options for other settings, like defaultOptions, link etc.?
export const createApolloClient = (
  options: FactoryOptions,
): ApolloClient<NormalizedCacheObject> => {
  const { cache } = options;

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
