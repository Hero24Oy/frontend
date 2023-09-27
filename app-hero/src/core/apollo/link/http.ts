import { BatchHttpLink } from '@apollo/client/link/batch-http';

import { BATCH_INTERVAL, BATCH_MAX } from '../constants';

import { serverConfig } from '$/configs';

export const httpLink = new BatchHttpLink({
  uri: serverConfig.apiUrl,
  batchMax: BATCH_MAX, // No more than N operations per batch
  batchInterval: BATCH_INTERVAL, // Wait no more than N ms after first batched operation
});
