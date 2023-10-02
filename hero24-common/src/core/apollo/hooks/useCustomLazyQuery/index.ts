import {
  DocumentNode,
  OperationVariables,
  QueryHookOptions,
  TypedDocumentNode,
  useLazyQuery,
} from '@apollo/client';
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

  const queryResult: CustomLazyQueryResult<Data, Variables> = {
    data: data?.[DEFAULT_RESPONSE_NAME],
    request: handleLazyQuery,
    ...restQueryResult,
  };

  return {
    [getGraphqlRequestKey(prefix)]: queryResult,
  } as PrefixedLazyQueryResult<Prefix, Data, Variables>;
};
