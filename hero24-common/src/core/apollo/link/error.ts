import { onError } from '@apollo/client/link/error';

// eslint-disable-next-line @typescript-eslint/naming-convention -- It's library parameter
export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
          locations,
        )}, Path: ${JSON.stringify(path)}`,
      ),
    );
  }

  if (networkError) {
    console.error(`[Network error]: ${JSON.stringify(networkError)}`);
  }
});
