import { createApolloClient } from '@hero24/common';

import { serverConfig } from '$configs';

import { getAuthToken } from '../firebase';

export const apolloClient = createApolloClient({
  getAuthToken,
  serverUrl: serverConfig.apiUrl,
});
