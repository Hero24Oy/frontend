import { serverConfig } from '$/configs';
import { createApolloClient } from '$common';

export const apolloClient = createApolloClient({
  cache: {},
  getAuthToken: () => 'string', // TODO from firebase
  serverUrl: serverConfig.apiUrl,
});
