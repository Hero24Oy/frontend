import {
  DocumentNode,
  OperationVariables,
  QueryHookOptions,
  TypedDocumentNode,
  useQuery,
} from '@apollo/client';
import merge from 'lodash/merge';
import { useCallback } from 'react';

import { DEFAULT_RESPONSE_NAME } from '../../constants';
import { GraphQlInput, GraphQlResponse } from '../../types';
import { getGraphqlRequestKey } from '../../utils';

import { PrefixedQueryResult, StrictPrefixedQueryResult } from './types';

export * from './types';
export const useCustomQuery = <
  Prefix extends string,
  Data,
  Variables extends OperationVariables,
  Strict extends boolean = false,
>(
  prefix: Prefix,
  document:
    | DocumentNode
    | TypedDocumentNode<GraphQlResponse<Data>, GraphQlInput<Variables>>,
  options?: QueryHookOptions<GraphQlResponse<Data>, GraphQlInput<Variables>>,
): Strict extends true
  ? StrictPrefixedQueryResult<Prefix, Data, Variables>
  : PrefixedQueryResult<Prefix, Data, Variables> => {
  const { data, ...restQueryResult } = useQuery<
    GraphQlResponse<Data>,
    GraphQlInput<Variables>
  >(document, options);

  const { fetchMore } = restQueryResult;
  const customFetchMore = useCallback(
    async (fetchMoreVariables: Variables): Promise<Data | undefined> => {
      const input = merge(
        options?.variables?.input,
        fetchMoreVariables,
      ) satisfies Record<string, string>;

      try {
        const result = await fetchMore({
          variables: {
            input,
          },
        });

        return result.data[DEFAULT_RESPONSE_NAME];
      } catch (error) {
        return undefined;
      }
    },
    [fetchMore, options?.variables?.input],
  );

  const queryResult = {
    data: data?.[DEFAULT_RESPONSE_NAME], // * Response must contain field {DEFAULT_RESPONSE_NAME}
    ...restQueryResult,
    fetchMore: customFetchMore,
  };

  return {
    [getGraphqlRequestKey(prefix)]: queryResult,
  } as Strict extends true
    ? StrictPrefixedQueryResult<Prefix, Data, Variables>
    : PrefixedQueryResult<Prefix, Data, Variables>;
};
