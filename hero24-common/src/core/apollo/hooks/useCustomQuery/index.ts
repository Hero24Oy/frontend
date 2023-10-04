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
import { GraphQlResponse } from '../../types';
import { getGraphqlRequestKey } from '../../utils';

import { CustomQueryResult, PrefixedQueryResult } from './types';

export * from './types';
export const useCustomQuery = <
  Prefix extends string,
  Data,
  Variables extends OperationVariables,
>(
  prefix: Prefix,
  document: DocumentNode | TypedDocumentNode<GraphQlResponse<Data>, Variables>,
  options?: QueryHookOptions<GraphQlResponse<Data>, Variables>,
): PrefixedQueryResult<Prefix, Data, Variables> => {
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

  const queryResult: CustomQueryResult<Data, Variables> = {
    data: data?.[DEFAULT_RESPONSE_NAME], // * Response must contain field {DEFAULT_RESPONSE_NAME}
    ...restQueryResult,
    fetchMore: customFetchMore,
  };

  return {
    [getGraphqlRequestKey(prefix)]: queryResult,
  } as PrefixedQueryResult<Prefix, Data, Variables>;
};
