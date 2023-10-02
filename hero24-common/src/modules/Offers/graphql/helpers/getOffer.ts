import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import { GraphQlInput, GraphQlResponse } from '../../../../core/apollo';
import { Offer } from '../fragments';
import { Data, QUERY, Variables } from '../queries/offer/query';

export const getOffer = (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  offerId: string,
): Offer | null => {
  return (
    apolloClient.readQuery<GraphQlResponse<Data>, GraphQlInput<Variables>>({
      query: QUERY,
      variables: {
        input: {
          offerId,
        },
      },
    })?.response ?? null
  );
};
