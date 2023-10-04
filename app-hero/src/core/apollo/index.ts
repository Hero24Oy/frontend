import { getUid } from '../firebase';

import { serverConfig } from '$/configs';
import { createApolloClient } from '$common';

export const apolloClient = createApolloClient({
  getAuthToken: getUid,
  serverUrl: serverConfig.apiUrl,
});
