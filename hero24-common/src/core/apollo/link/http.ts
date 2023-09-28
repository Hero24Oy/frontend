import { ApolloLink } from '@apollo/client';
import { BatchHttpLink } from '@apollo/client/link/batch-http';

import { BATCH_INTERVAL, BATCH_MAX } from '../constants';
import { LinksOptions } from '../types';

export const createHttpLink = (
  options: Pick<LinksOptions, 'serverUrl'>,
): ApolloLink => {
  const { serverUrl } = options;

  return new BatchHttpLink({
    uri: serverUrl,
    batchMax: BATCH_MAX, // No more than N operations per batch
    batchInterval: BATCH_INTERVAL, // Wait no more than N ms after first batched operation
  });
};
