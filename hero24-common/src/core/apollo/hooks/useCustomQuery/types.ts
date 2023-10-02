import {
  OperationVariables,
  QueryHookOptions,
  QueryResult,
} from '@apollo/client';

import {
  GraphQlInput,
  GraphQlPaginationArguments,
  GraphQlResponse,
} from '../../types';
import { GetGraphqlRequestKeyReturnType } from '../../utils';

export type CustomQueryResult<
  Data,
  Variables extends OperationVariables,
> = Omit<
  QueryResult<GraphQlResponse<Data>, GraphQlInput<Variables>>,
  'data' | 'fetchMore'
> & {
  // TODO add types for filtering in future
  fetchMore: (
    options?: GraphQlPaginationArguments,
  ) => Promise<Data | undefined>;
  data?: Data;
};

export type PrefixedQueryResult<
  Prefix extends string,
  Data,
  Variables extends OperationVariables,
> = Record<
  GetGraphqlRequestKeyReturnType<Prefix>,
  CustomQueryResult<Data, Variables>
>;

export type UseQueryWrapper<
  Prefix extends string,
  Data,
  Variables extends OperationVariables,
> = (
  options?: QueryHookOptions<GraphQlResponse<Data>, GraphQlInput<Variables>>,
) => PrefixedQueryResult<Prefix, Data, Variables>;
