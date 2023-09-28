import { ApolloLink, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

import { OPERATION_DEFINITION, SUBSCRIPTION } from '../constants';
import { LinksOptions } from '../types';

import { createAuthLink } from './auth';
import { createErrorLink } from './error';
import { createHttpLink } from './http';
import { createWebsocketLink } from './websocket';

export const createLink = (options: LinksOptions): ApolloLink => {
  const { getAuthToken, serverUrl } = options;

  const authLink = createAuthLink({ getAuthToken });
  const httpLink = createHttpLink({ serverUrl });
  const errorLink = createErrorLink();
  const wsLink = createWebsocketLink({
    getAuthToken,
    serverUrl,
  });

  const linkWithSubscription = wsLink ? errorLink.concat(wsLink) : errorLink;
  const linkWithoutSubscription = authLink.concat(errorLink).concat(httpLink);

  const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query);

      return (
        definition.kind === OPERATION_DEFINITION &&
        definition.operation === SUBSCRIPTION
      );
    },
    linkWithSubscription,
    linkWithoutSubscription,
  );

  return link;
};
