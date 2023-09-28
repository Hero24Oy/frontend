import { ApolloLink } from '@apollo/client';

import { LinksOptions } from '../types';

import { createAuthLink } from './auth';
import { createErrorLink } from './error';
import { createHttpLink } from './http';
// import { createWebsocketLink } from './websocket';

export const createLink = (options: LinksOptions): ApolloLink => {
  const { getAuthToken, serverUrl } = options;

  const authLink = createAuthLink({ getAuthToken });
  const httpLink = createHttpLink({ serverUrl });
  const errorLink = createErrorLink();
  // const websocketLink = createWebsocketLink({
  //   getAuthToken,
  //   serverUrl,
  // });

  // const link = split(
  //   ({ query }) => {
  //     const definition = getMainDefinition(query);

  //     return (
  //       definition.kind === OPERATION_DEFINITION &&
  //       definition.operation === SUBSCRIPTION
  //     );
  //   },
  //   errorLink.concat(websocketLink), // TODO don't work properly on web, but works on mobile
  //   authLink.concat(errorLink).concat(httpLink),
  // );

  // return link;

  return authLink.concat(errorLink).concat(httpLink);
};
