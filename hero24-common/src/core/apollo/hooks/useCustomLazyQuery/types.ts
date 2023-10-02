import {
  LazyQueryHookOptions,
  LazyQueryResult,
  OperationVariables,
} from '@apollo/client';

import { GraphQlInput, GraphQlResponse } from '../../types';
import { GetGraphqlRequestKeyReturnType } from '../../utils';

// TODO create custom fetch more when all paginated resolvers at server are of same structure
export type CustomLazyQueryResult<
  Data,
  Variables extends OperationVariables,
> = Omit<
  LazyQueryResult<GraphQlResponse<Data>, GraphQlInput<Variables>>,
  'data'
> & {
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
