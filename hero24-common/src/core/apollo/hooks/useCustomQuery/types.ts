import {
  OperationVariables,
  QueryHookOptions,
  QueryResult,
} from '@apollo/client';

import { GraphQlInput, GraphQlResponse } from '../../types';
import { GetGraphqlRequestKeyReturnType } from '../../utils';

export type CustomQueryResult<
  Data,
  Variables extends OperationVariables,
> = Omit<
  QueryResult<GraphQlResponse<Data>, GraphQlInput<Variables>>,
  'data' | 'fetchMore'
> & {
  data: Required<NonNullable<Data>>;
  fetchMore: (options: Variables) => Promise<Data | undefined>;
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
