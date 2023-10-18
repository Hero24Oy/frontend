import { InMemoryCacheConfig } from '@apollo/client';

import { Maybe } from '$common/core';

export type LinksOptions = {
  getAuthToken: () => Promise<Maybe<string>>;
  serverUrl: string;
};

export type CreateApolloClientOptions = {
  cache?: InMemoryCacheConfig;
} & LinksOptions;
