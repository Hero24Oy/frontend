import {
  LazyQueryHookOptions,
  LazyQueryResult,
  OperationVariables,
} from '@apollo/client';

import { GetGraphqlRequestKeyReturnType, GraphQlResponse } from '$core';

export type CustomLazyQueryResult<
  Data,
  Variables extends OperationVariables,
> = Omit<
  LazyQueryResult<GraphQlResponse<Data>, Variables>,
  'data' | 'fetchMore'
> & {
  fetchMore: (options: Variables) => Promise<Data | undefined>;
  request: (input: Variables) => Promise<Data | undefined>;
  data?: Data;
};

export type PrefixedLazyQueryResult<
  Prefix extends string,
  Data,
  Variables extends OperationVariables,
> = Record<
  GetGraphqlRequestKeyReturnType<Prefix>,
  CustomLazyQueryResult<Data, Variables>
>;

export type UseLazyQueryWrapper<
  Prefix extends string,
  Data,
  Variables extends OperationVariables,
> = (
  options?: LazyQueryHookOptions<GraphQlResponse<Data>, Variables>,
) => PrefixedLazyQueryResult<Prefix, Data, Variables>;
