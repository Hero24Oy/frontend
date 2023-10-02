import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import {
  DEFAULT_RESPONSE_NAME,
  GraphQlResponse,
} from '../../../../core/apollo';
import { Data, QUERY } from '../queries/offer/query';

export const updateOffer = (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  data: GraphQlResponse<Data>[typeof DEFAULT_RESPONSE_NAME],
): void => {
  apolloClient.writeQuery<GraphQlResponse<Data>>({
    query: QUERY,
    data: {
      response: data,
    },
  });
};
