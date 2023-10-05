import { getAuthToken } from '../firebase';

import { serverConfig } from '$/configs';
import { createApolloClient } from '$common';

export const apolloClient = createApolloClient({
  getAuthToken,
  serverUrl: serverConfig.apiUrl,
});
