import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
// eslint-disable-next-line import/no-extraneous-dependencies -- TODO fix it
import { createClient } from 'graphql-ws';

// import { getIdToken } from '$/api/firebase';
// import { serverConfig } from '$/config';

export const websocketLink = new GraphQLWsLink(
  createClient({
    url: "serverConfig.apiUrl.replace('http', 'ws')",
    shouldRetry: () => true,
    connectionParams: async () => {
      // * get the authentication token from firebase if it exists
      // const authorization = await getIdToken();

      // return the connection param with authorization to handle it on the server side
      return {
        authorization: 'authorization', // TODO when firebase is migrated
      };
    },
  }),
);
