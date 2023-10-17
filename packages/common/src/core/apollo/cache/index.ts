import { InMemoryCache, InMemoryCacheConfig } from '@apollo/client';
import merge from 'lodash/merge';

import { typePolicies } from './typePolicies';

export const createCache = (policies?: InMemoryCacheConfig): InMemoryCache => {
  return new InMemoryCache({
    typePolicies: policies ? merge(typePolicies, policies) : typePolicies,
  });
};
