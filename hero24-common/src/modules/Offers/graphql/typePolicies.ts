import {
  FieldFunctionOptions,
  FieldMergeFunction,
  TypePolicies,
} from '@apollo/client';

import { OFFER_TYPE_NAME, Variables } from './queries/offer/query';
import { Data } from './queries/offers/query';

const DEFAULT_INPUT_NAME = 'input';

type GraphQlInput<Variables> = Record<typeof DEFAULT_INPUT_NAME, Variables>;

export const offersTypePolicies: TypePolicies = {
  Query: {
    fields: {
      offer: {
        keyArgs: false,
        read: (
          _cachedKey,
          options: FieldFunctionOptions<Partial<GraphQlInput<Variables>>>,
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
        }) as FieldMergeFunction<Data>,
      },
    },
  },
};
