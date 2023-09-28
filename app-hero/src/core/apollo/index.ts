import { createApolloClient } from '$common';

export const apolloClient = createApolloClient({
  cache: {},
  getAuthToken: () => 'string', // TODO from firebase
  serverUrl: 'http://localhost:8080/graphql', // TODO from env
});
