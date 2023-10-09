import { InMemoryCacheConfig } from '@apollo/client';

export type LinksOptions = {
  getAuthToken: () => Promise<string | undefined>;
  serverUrl: string;
};

export type CreateApolloClientOptions = {
  cache?: InMemoryCacheConfig;
} & LinksOptions;
