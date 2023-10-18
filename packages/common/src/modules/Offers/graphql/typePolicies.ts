import {
  FieldFunctionOptions,
  FieldMergeFunction,
  TypePolicies,
} from '@apollo/client';

import { OFFER_TYPE_NAME } from './constants';

import { GraphQlInput, GraphQlPagination } from '$common/core';

export const offersTypePolicies: TypePolicies = {
  Query: {
    fields: {
      offer: {
        keyArgs: false,
        read: (
          _cachedKey,
          options: FieldFunctionOptions<
            Partial<GraphQlInput<{ offerId: string }>>
          >,
        ) => {
          const { args, toReference } = options;

          return toReference({
            __typename: OFFER_TYPE_NAME,
            id: args?.input?.offerId,
          });
        },
      },
      offers: {
        keyArgs: false,
        merge: ((existing, incoming) => {
          // * In case cache is empty or it's the first request just return incoming data
          if (!existing) {
            return incoming;
          }

          return {
            ...existing,
            ...incoming,
            edges: [...existing.edges, ...incoming.edges],
          };
        }) as FieldMergeFunction<GraphQlPagination>,
      },
    },
  },
};
