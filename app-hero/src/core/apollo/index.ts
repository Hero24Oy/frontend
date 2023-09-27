import { ApolloClient } from '@apollo/client';

import { cache } from './cache';
import { link } from './link';

export * from './constants';
export * from './hooks';
export * from './types';

export const apolloClient = new ApolloClient({
  link,
  cache,
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
