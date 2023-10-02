import {
  DocumentNode,
  OperationVariables,
  QueryHookOptions,
  TypedDocumentNode,
  useQuery,
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

import { CustomQueryResult, PrefixedQueryResult } from './types';

export * from './types';
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

  const queryResult: CustomQueryResult<Data, Variables> = {
    data: data?.[DEFAULT_RESPONSE_NAME], // * Response must contain field {DEFAULT_RESPONSE_NAME}
    ...restQueryResult,
    fetchMore: customFetchMore,
  };

  return {
    [getGraphqlRequestKey(prefix)]: queryResult,
  } as PrefixedQueryResult<Prefix, Data, Variables>;
};
