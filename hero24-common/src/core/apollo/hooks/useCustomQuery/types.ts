import {
  OperationVariables,
  QueryHookOptions,
  QueryResult,
} from '@apollo/client';

import { GraphQlResponse } from '../../types';
import { GetGraphqlRequestKeyReturnType } from '../../utils';

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
  options?: QueryHookOptions<GraphQlResponse<Data>, Variables>,
) => PrefixedQueryResult<Prefix, Data, Variables>;
