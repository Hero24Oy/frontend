import {
  OperationVariables,
  QueryHookOptions,
  QueryResult,
} from '@apollo/client';

import { GetGraphqlRequestKeyReturnType } from '../../helpers';
import { GraphQlInput, GraphQlResponse } from '../../types';

export type CustomQueryResult<
  Data,
  Variables extends OperationVariables,
> = Omit<
  QueryResult<GraphQlResponse<Data>, GraphQlInput<Variables>>,
  'data'
> & {
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
