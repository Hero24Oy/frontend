import { getAuthToken } from '../firebase';

import { createApolloClient } from '@hero24/common';
import { serverConfig } from '$configs';

export const apolloClient = createApolloClient({
  getAuthToken,
  serverUrl: serverConfig.apiUrl,
});
