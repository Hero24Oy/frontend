import { createApolloClient } from '@hero24/common';

import { getAuthToken } from '../firebase';

import { cache } from './cache';

import { serverConfig } from '$configs';

export const apolloClient = createApolloClient({
  getAuthToken,
  cache,
  serverUrl: serverConfig.apiUrl,
});
