import { InMemoryCache, InMemoryCacheConfig } from '@apollo/client';
import merge from 'lodash/merge';

import { defaultTypePolicies } from './typePolicies';

export const createCache = (policies?: InMemoryCacheConfig): InMemoryCache => {
  return new InMemoryCache({
    typePolicies: policies?.typePolicies
      ? merge(defaultTypePolicies, policies.typePolicies)
      : defaultTypePolicies,
  });
};
