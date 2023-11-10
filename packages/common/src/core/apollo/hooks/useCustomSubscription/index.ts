import {
  DocumentNode,
  OperationVariables,
  SubscriptionHookOptions,
  TypedDocumentNode,
  useSubscription,
} from '@apollo/client';
import { DEFAULT_RESPONSE_NAME } from 'core/apollo/constants';
import { GraphQlResponse } from 'core/apollo/types';

import { CustomSubscriptionResult, PrefixedSubscriptionResult } from './types';

export * from './types';

export const useCustomSubscription = <
  Prefix extends string,
  Data,
  Variables extends OperationVariables,
>(
  prefix: Prefix,
  document: DocumentNode | TypedDocumentNode<GraphQlResponse<Data>, Variables>,
  options?: SubscriptionHookOptions<GraphQlResponse<Data>, Variables>,
): PrefixedSubscriptionResult<Prefix, Data, Variables> => {
  const { data, ...restQueryResult } = useSubscription<
    GraphQlResponse<Data>,
    Variables
  >(document, options);

  const queryResult: CustomSubscriptionResult<Data, Variables> = {
    data: data?.[DEFAULT_RESPONSE_NAME], // * Response must contain field {DEFAULT_RESPONSE_NAME}
    ...restQueryResult,
  };

  return {
    [prefix]: queryResult,
  } as PrefixedSubscriptionResult<Prefix, Data, Variables>;
};
