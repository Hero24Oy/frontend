import { ApolloLink, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

import { OPERATION_DEFINITION, SUBSCRIPTION } from '../constants';
import { LinksOptions } from '../types';

import { createAuthLink } from './auth';
import { createErrorLink } from './error';
import { createHttpLink } from './http';

export const createLink = (options: LinksOptions): ApolloLink => {
  const { getAuthToken, serverUrl } = options;

  const authLink = createAuthLink({ getAuthToken });
  const httpLink = createHttpLink({ serverUrl });
  const errorLink = createErrorLink();

  const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query);

      return (
        definition.kind === OPERATION_DEFINITION &&
        definition.operation === SUBSCRIPTION
      );
    },
    // errorLink.concat(websocketLink), // TODO don't work properly on web, but works on mobile
    authLink.concat(errorLink).concat(httpLink),
  );

  return link;
};
