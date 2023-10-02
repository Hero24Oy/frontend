import {
  DocumentNode,
  OperationVariables,
  QueryHookOptions,
  TypedDocumentNode,
  useQuery,
} from '@apollo/client';

import { DEFAULT_RESPONSE_NAME } from '../../constants';
import { GraphQlInput, GraphQlResponse } from '../../types';
import { getGraphqlRequestKey } from '../../utils';

import { CustomQueryResult, PrefixedQueryResult } from './types';

export * from './types';

// TODO create custom fetch more when all paginated resolvers at server are of same structure
export const useCustomQuery = <
  Prefix extends string,
  Data,
  Variables extends OperationVariables,
>(
  prefix: Prefix,
  document:
    | DocumentNode
    | TypedDocumentNode<GraphQlResponse<Data>, GraphQlInput<Variables>>,
  options?: QueryHookOptions<GraphQlResponse<Data>, GraphQlInput<Variables>>,
): PrefixedQueryResult<Prefix, Data, Variables> => {
  const { data, ...restQueryResult } = useQuery<
    GraphQlResponse<Data>,
    GraphQlInput<Variables>
  >(document, options);

  const queryResult: CustomQueryResult<Data, Variables> = {
    data: data?.[DEFAULT_RESPONSE_NAME], // * Response must contain field {DEFAULT_RESPONSE_NAME}
    ...restQueryResult,
  };

  return {
    [getGraphqlRequestKey(prefix)]: queryResult,
  } as PrefixedQueryResult<Prefix, Data, Variables>;
};
