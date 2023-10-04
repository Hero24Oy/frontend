import {
  LazyQueryHookOptions,
  LazyQueryResult,
  OperationVariables,
} from '@apollo/client';

import { GraphQlInput, GraphQlResponse } from '../../types';
import { GetGraphqlRequestKeyReturnType } from '../../utils';

export type CustomLazyQueryResult<
  Data,
  Variables extends OperationVariables,
> = Omit<
  LazyQueryResult<GraphQlResponse<Data>, GraphQlInput<Variables>>,
  'data' | 'fetchMore'
> & {
  data: Required<Data>;
  fetchMore: (options: Variables) => Promise<Data | undefined>;
  request: (input: Variables) => Promise<Data | undefined>;
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
