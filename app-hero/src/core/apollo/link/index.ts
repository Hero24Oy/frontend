import { split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

import { authLink } from './auth';
import { errorLink } from './error';
import { httpLink } from './http';
import { websocketLink } from './websocket';

export const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);

    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  errorLink.concat(websocketLink),
  authLink.concat(errorLink).concat(httpLink),
);
