import { getAuthToken } from '../firebase';

import { createApolloClient } from '$common';
import { serverConfig } from '$configs';

export const apolloClient = createApolloClient({
  getAuthToken,
  serverUrl: serverConfig.apiUrl,
});
