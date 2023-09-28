import { FieldMergeFunction } from '@apollo/client';

import { Data } from '../../query';

export const merge: FieldMergeFunction<Data> = (existing, incoming) => {
  // * In case cache is empty or it's the first request just return incoming data
  if (!existing) {
    return incoming;
  }

  return {
    ...existing,
    ...incoming,
    edges: [...existing.edges, ...incoming.edges],
  };
};
