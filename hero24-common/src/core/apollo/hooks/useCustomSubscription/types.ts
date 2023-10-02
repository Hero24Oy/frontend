import {
  OperationVariables,
  SubscriptionHookOptions,
  SubscriptionResult,
} from '@apollo/client';

import { GraphQlInput, GraphQlResponse } from '../../types';

export type CustomSubscriptionResult<
  Data,
  Variables extends OperationVariables,
> = Omit<
  SubscriptionResult<GraphQlResponse<Data>, GraphQlInput<Variables>>,
  'data'
> & {
  data?: Data;
};

export type PrefixedSubscriptionResult<
  Prefix extends string,
  Data,
  Variables extends OperationVariables,
> = Record<Prefix, CustomSubscriptionResult<GraphQlResponse<Data>, Variables>>;

export type UseSubscriptionWrapper<
  Prefix extends string,
  Data,
  Variables extends OperationVariables,
> = (
  options?: SubscriptionHookOptions<
    GraphQlResponse<Data>,
    GraphQlInput<Variables>
  >,
) => PrefixedSubscriptionResult<Prefix, Data, Variables>;
