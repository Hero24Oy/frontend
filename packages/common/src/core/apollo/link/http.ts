import { ApolloLink } from '@apollo/client';
import { BatchHttpLink } from '@apollo/client/link/batch-http';

import { ApolloConfig } from '../constants';
import { LinksOptions } from '../types';

export const createHttpLink = (
  options: Pick<LinksOptions, 'serverUrl'>,
): ApolloLink => {
  const { batchMax, batchInterval } = ApolloConfig;
  const { serverUrl } = options;

  return new BatchHttpLink({
    uri: serverUrl,
    batchMax, // No more than N operations per batch
    batchInterval, // Wait no more than N ms after first batched operation
  });
};
