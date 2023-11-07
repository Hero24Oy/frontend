import { createApolloClient } from '@hero24/common';

import { getAuthToken } from '../firebase';

import { serverConfig } from '$configs';

// TODO add type police
export const apolloClient = createApolloClient({
  getAuthToken,
  serverUrl: serverConfig.apiUrl,
});
