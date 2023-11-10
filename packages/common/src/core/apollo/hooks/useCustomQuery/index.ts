import {
  DocumentNode,
  OperationVariables,
  QueryHookOptions,
  TypedDocumentNode,
  useQuery,
} from '@apollo/client';
import merge from 'lodash/merge';
import { useCallback } from 'react';

import { PrefixedQueryResult, StrictPrefixedQueryResult } from './types';

import { DEFAULT_RESPONSE_NAME } from '$core/apollo/constants';
import { GraphQlResponse } from '$core/apollo/types';
import { getGraphqlRequestKey } from '$core/apollo/utils';

export * from './types';
export const useCustomQuery = <
  Prefix extends string,
  Data,
  Variables extends OperationVariables,
  Strict extends boolean = false,
>(
  prefix: Prefix,
  document: DocumentNode | TypedDocumentNode<GraphQlResponse<Data>, Variables>,
  options?: QueryHookOptions<GraphQlResponse<Data>, Variables>,
): Strict extends true
  ? StrictPrefixedQueryResult<Prefix, Data, Variables>
  : PrefixedQueryResult<Prefix, Data, Variables> => {
  const { data, ...restQueryResult } = useQuery<
    GraphQlResponse<Data>,
    Variables
  >(document, options);

  const { fetchMore } = restQueryResult;
  const customFetchMore = useCallback(
    async (fetchMoreVariables: Variables): Promise<Data | undefined> => {
      const variables = merge(
        options?.variables,
        fetchMoreVariables,
      ) satisfies Record<string, string>;

      try {
        const result = await fetchMore({
          variables,
        });

        return result?.data[DEFAULT_RESPONSE_NAME];
      } catch (error) {
        return undefined;
      }
    },
    [fetchMore, options?.variables],
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
