import {
  LazyQueryHookOptions,
  LazyQueryResult,
  OperationVariables,
} from '@apollo/client';

import {
  GraphQlInput,
  GraphQlPaginationArguments,
  GraphQlResponse,
} from '../../types';
import { GetGraphqlRequestKeyReturnType } from '../../utils';

export type CustomLazyQueryResult<
  Data,
  Variables extends OperationVariables,
> = Omit<
  LazyQueryResult<GraphQlResponse<Data>, GraphQlInput<Variables>>,
  'data' | 'fetchMore'
> & {
  fetchMore: (
    options?: GraphQlPaginationArguments,
  ) => Promise<Data | undefined>;
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
  options?: LazyQueryHookOptions<
    GraphQlResponse<Data>,
    GraphQlInput<Variables>
  >,
) => PrefixedLazyQueryResult<Prefix, Data, Variables>;
