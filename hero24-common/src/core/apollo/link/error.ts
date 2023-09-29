import { ApolloLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

export const createErrorLink = (): ApolloLink =>
  onError(({ graphQLErrors, networkError }) => {
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
