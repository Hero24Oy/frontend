import {
  DocumentNode,
  MutationHookOptions,
  OperationVariables,
  TypedDocumentNode,
  useMutation,
} from '@apollo/client';
import { useCallback } from 'react';

import { DEFAULT_RESPONSE_NAME } from '../../constants';
import { GraphQlResponse } from '../../types';

import { CustomMutationResult, PrefixedMutationResult } from './types';

export * from './types';

export const useCustomMutation = <
  Prefix extends string,
  Data,
  Variables extends OperationVariables,
>(
  prefix: Prefix,
  document: DocumentNode | TypedDocumentNode<GraphQlResponse<Data>, Variables>,
  options?: MutationHookOptions<GraphQlResponse<Data>, Variables>,
): PrefixedMutationResult<Prefix, Data, Variables> => {
  const [mutation, { data, ...restMutationResult }] = useMutation<
    GraphQlResponse<Data>,
    Variables
  >(document, options);

  // we need this handler to avoid unhandled promises
  const handleMutation = useCallback(
    async (variables: Variables): Promise<Data | undefined> => {
      try {
        const result = await mutation({
          variables,
        });

        // we do nothing with the error since we use the errorLink to handle this
        return result.data?.[DEFAULT_RESPONSE_NAME];
      } catch (error) {
        console.error(error);
        return undefined;
      }
    },
    [mutation],
  );

  const mutationResult: CustomMutationResult<Data, Variables> = {
    data: data?.[DEFAULT_RESPONSE_NAME], // * Response must contain field {DEFAULT_RESPONSE_NAME}
    request: handleMutation,
    ...restMutationResult,
  };

  return {
    [prefix]: mutationResult,
  } as PrefixedMutationResult<Prefix, Data, Variables>;
};
