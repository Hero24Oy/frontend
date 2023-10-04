import { InMemoryCacheConfig } from '@apollo/client';

export type LinksOptions = {
  getAuthToken: () => Promise<string | null | undefined> | string | undefined;
  serverUrl: string;
};

export type CreateApolloClientOptions = {
  cache?: InMemoryCacheConfig;
} & LinksOptions;
