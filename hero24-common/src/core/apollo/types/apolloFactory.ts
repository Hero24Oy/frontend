import { InMemoryCacheConfig } from '@apollo/client';

export type LinksOptions = {
  getAuthToken: () => Promise<string | null> | string;
  serverUrl: string;
};

export type CreateApolloClientOptions = {
  cache?: InMemoryCacheConfig;
} & LinksOptions;
