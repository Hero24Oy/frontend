import { ApolloProvider } from '@apollo/client';
import { combineProviders } from 'react-combine-providers';

import { apolloClient } from '../apollo';

import { initializeProviders } from '$ui-library';

const manager = combineProviders();

initializeProviders(manager);

manager.push(ApolloProvider, {
  children: null,
  client: apolloClient,
});

export const MasterProvider = manager.master();
