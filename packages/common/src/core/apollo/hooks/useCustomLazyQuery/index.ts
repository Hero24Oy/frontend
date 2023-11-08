import {
  DocumentNode,
  OperationVariables,
  QueryHookOptions,
  TypedDocumentNode,
  useLazyQuery,
} from '@apollo/client';
import merge from 'lodash/merge';
import { useCallback } from 'react';

import { CustomLazyQueryResult, PrefixedLazyQueryResult } from './types';

import {
  DEFAULT_RESPONSE_NAME,
  getGraphqlRequestKey,
  GraphQlResponse,
} from '$core';

export * from './types';

export const useCustomLazyQuery = <
  Prefix extends string,
  Data,
  Variables extends OperationVariables,
>(
  prefix: Prefix,
  document: DocumentNode | TypedDocumentNode<GraphQlResponse<Data>, Variables>,
  options?: QueryHookOptions<GraphQlResponse<Data>, Variables>,
): PrefixedLazyQueryResult<Prefix, Data, Variables> => {
  const [lazyQuery, { data, ...restQueryResult }] = useLazyQuery<
    GraphQlResponse<Data>,
    Variables
  >(document, options);

  const handleLazyQuery = useCallback(
    async (variables: Variables): Promise<Data | undefined> => {
      try {
        const result = await lazyQuery({
          variables,
        });

        return result.data?.[DEFAULT_RESPONSE_NAME];
      } catch (error) {
        console.error(error);
        return undefined;
      }
    },
    [lazyQuery],
  );

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

        return result.data[DEFAULT_RESPONSE_NAME];
      } catch (error) {
        return undefined;
      }
    },
    [fetchMore, options?.variables],
  );

  const queryResult: CustomLazyQueryResult<Data, Variables> = {
    ...restQueryResult,
    data: data?.[DEFAULT_RESPONSE_NAME],
    request: handleLazyQuery,
    fetchMore: customFetchMore,
  };

  return {
    [getGraphqlRequestKey(prefix)]: queryResult,
  } as PrefixedLazyQueryResult<Prefix, Data, Variables>;
};
