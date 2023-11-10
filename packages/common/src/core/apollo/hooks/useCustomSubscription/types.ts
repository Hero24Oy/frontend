import {
  OperationVariables,
  SubscriptionHookOptions,
  SubscriptionResult,
} from '@apollo/client';

import { GraphQlResponse } from '$core/apollo/types';

export type CustomSubscriptionResult<
  Data,
  Variables extends OperationVariables,
> = Omit<SubscriptionResult<GraphQlResponse<Data>, Variables>, 'data'> & {
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
  options?: SubscriptionHookOptions<GraphQlResponse<Data>, Variables>,
) => PrefixedSubscriptionResult<Prefix, Data, Variables>;
