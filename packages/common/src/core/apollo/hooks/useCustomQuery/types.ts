import {
  OperationVariables,
  QueryHookOptions,
  QueryResult,
} from '@apollo/client';

import { GetGraphqlRequestKeyReturnType, GraphQlResponse } from '$common/core';

export type CustomQueryResult<
  Data,
  Variables extends OperationVariables,
> = Omit<
  QueryResult<GraphQlResponse<Data>, Variables>,
  'data' | 'fetchMore'
> & {
  fetchMore: (options: Variables) => Promise<Data | undefined>;
  data?: Data;
};

export type StrictCustomQueryResult<
  Data,
  Variables extends OperationVariables,
> = Omit<
  QueryResult<GraphQlResponse<Data>, Variables>,
  'data' | 'fetchMore'
> & {
  data: Data;
  fetchMore: (options: Variables) => Promise<Data>;
};

export type PrefixedQueryResult<
  Prefix extends string,
  Data,
  Variables extends OperationVariables,
> = Record<
  GetGraphqlRequestKeyReturnType<Prefix>,
  CustomQueryResult<Data, Variables>
>;

export type StrictPrefixedQueryResult<
  Prefix extends string,
  Data,
  Variables extends OperationVariables,
> = Record<
  GetGraphqlRequestKeyReturnType<Prefix>,
  StrictCustomQueryResult<Data, Variables>
>;

export type UseQueryWrapper<
  Prefix extends string,
  Data,
  Variables extends OperationVariables,
  Strict extends boolean = false,
> = (
  options?: QueryHookOptions<GraphQlResponse<Data>, Variables>,
) => Strict extends true
  ? StrictPrefixedQueryResult<Prefix, Data, Variables>
  : PrefixedQueryResult<Prefix, Data, Variables>;
