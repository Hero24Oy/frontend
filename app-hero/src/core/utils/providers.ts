import { ApolloProvider } from '@apollo/client';
import { combineProviders } from 'react-combine-providers';

import { apolloClient } from '../apollo';

import { providers as viewProviders } from '$ui-library';

const providers = combineProviders();

viewProviders.forEach((provider) => providers.push(...provider));

providers.push(ApolloProvider, {
  children: null,
  client: apolloClient,
});

export const MasterProvider = providers.master();
