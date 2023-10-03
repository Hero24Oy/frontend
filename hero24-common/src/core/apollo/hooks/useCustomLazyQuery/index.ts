import {
  DocumentNode,
  OperationVariables,
  QueryHookOptions,
  TypedDocumentNode,
  useLazyQuery,
} from '@apollo/client';
import merge from 'lodash/merge';
import { useCallback } from 'react';

import { DEFAULT_RESPONSE_NAME } from '../../constants';
import { GraphQlInput, GraphQlResponse } from '../../types';
import { getGraphqlRequestKey } from '../../utils';

import { CustomLazyQueryResult, PrefixedLazyQueryResult } from './types';

export * from './types';

export const useCustomLazyQuery = <
  Prefix extends string,
  Data,
  Variables extends OperationVariables,
>(
  prefix: Prefix,
  document:
    | DocumentNode
    | TypedDocumentNode<GraphQlResponse<Data>, GraphQlInput<Variables>>,
  options?: QueryHookOptions<GraphQlResponse<Data>, GraphQlInput<Variables>>,
): PrefixedLazyQueryResult<Prefix, Data, Variables> => {
  const [lazyQuery, { data, ...restQueryResult }] = useLazyQuery<
    GraphQlResponse<Data>,
    GraphQlInput<Variables>
  >(document, options);

  const handleLazyQuery = useCallback(
    async (input: Variables): Promise<Data | undefined> => {
      try {
        const result = await lazyQuery({
          variables: {
            input,
          },
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
    async (fetchMoreVariables?: Variables): Promise<Data | undefined> => {
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
