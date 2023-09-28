import { ApolloLink } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
// eslint-disable-next-line import/no-extraneous-dependencies -- TODO fix it
import { createClient } from 'graphql-ws';

import { LinksOptions } from '../types';

export const createWebsocketLink = (
  options: LinksOptions,
): ApolloLink | null => {
  const { getAuthToken, serverUrl } = options;

  // * This is need because of SSR, it accesses 'window' property, which does not exist on server
  // * https://stackoverflow.com/questions/72116940/apollo-graphql-graphqlwslink-subscriptions-troubles-cannot-get-websocket-imp
  if (typeof window === 'undefined') {
    return null;
  }

  const link = new GraphQLWsLink(
    createClient({
      url: serverUrl,
      shouldRetry: () => true,
      connectionParams: async () => {
        // * get the authentication token from firebase if it exists
        const authorization = await getAuthToken();

        // return the connection param with authorization to handle it on the server side
        return {
          authorization,
        };
      },
    }),
  );

  return link;
};
