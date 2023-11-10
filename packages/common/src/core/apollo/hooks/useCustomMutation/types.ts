import {
  MutationHookOptions,
  MutationResult,
  OperationVariables,
} from '@apollo/client';

import { GraphQlResponse } from '$core/apollo/types';

export type CustomMutationResult<
  Data,
  Variables extends OperationVariables,
> = Omit<MutationResult<GraphQlResponse<Data>>, 'data'> & {
  request: (input: Variables) => Promise<Data | undefined>;
  data?: Data;
};

export type PrefixedMutationResult<
  Prefix extends string,
  Data,
  Variables extends OperationVariables,
> = Record<Prefix, CustomMutationResult<Data, Variables>>;

export type UseMutationWrapper<
  Prefix extends string,
  Data,
  Variables extends OperationVariables,
> = (
  options?: MutationHookOptions<GraphQlResponse<Data>, Variables>,
) => PrefixedMutationResult<Prefix, Data, Variables>;
