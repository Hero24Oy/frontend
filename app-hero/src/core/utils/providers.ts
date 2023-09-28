import { ApolloProvider } from '@apollo/client';
import { combineProviders } from 'react-combine-providers';

import { apolloClient } from '../apollo';

const providers = combineProviders();

providers.push(ApolloProvider, {
  children: null,
  client: apolloClient,
});

export const MasterProvider = providers.master();
