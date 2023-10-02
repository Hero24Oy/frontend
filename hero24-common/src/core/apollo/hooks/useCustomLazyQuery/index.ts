import {
  DocumentNode,
  OperationVariables,
  QueryHookOptions,
  TypedDocumentNode,
  useLazyQuery,
} from '@apollo/client';
import get from 'lodash/get';
import { useCallback } from 'react';

import { OfferUserRole } from '../../../../modules/Offers/graphql/constants';
import { DEFAULT_RESPONSE_NAME, ITEMS_PER_PAGE } from '../../constants';
import {
  GraphQlInput,
  GraphQlPagination,
  GraphQlPaginationArguments,
  GraphQlResponse,
} from '../../types';
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
    async (
      fetchMoreOptions?: GraphQlPaginationArguments,
    ): Promise<Data | undefined> => {
      // * Endpoint should return response conforming to interface GraphQlResponse<GraphQlPagination>
      const edgesLength = get(data as GraphQlResponse<GraphQlPagination>, [
        DEFAULT_RESPONSE_NAME,
        'edges',
        'length',
      ]);

      // TODO handle ordering and filtering
      try {
        const result = await fetchMore({
          variables: {
            input: {
              limit: fetchMoreOptions?.limit || ITEMS_PER_PAGE,
              offset: fetchMoreOptions?.offset || edgesLength || 0,
              role: OfferUserRole.SELLER, // TODO handle this dynamically
            },
          },
        });

        return result.data[DEFAULT_RESPONSE_NAME];
      } catch (error) {
        return undefined;
      }
    },
    [data, fetchMore],
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
