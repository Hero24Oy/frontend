import {
  DocumentNode,
  MutationHookOptions,
  OperationVariables,
  TypedDocumentNode,
  useMutation,
} from '@apollo/client';

import { DEFAULT_RESPONSE_NAME } from '../../constants';
import { GraphQlInput, GraphQlResponse } from '../../types';

import { CustomMutationResult, PrefixedMutationResult } from './types';

export * from './types';

export const useCustomMutation = <
  Prefix extends string,
  Data,
  Variables extends OperationVariables,
>(
  prefix: Prefix,
  document:
    | DocumentNode
    | TypedDocumentNode<GraphQlResponse<Data>, GraphQlInput<Variables>>,
  options?: MutationHookOptions<GraphQlResponse<Data>, GraphQlInput<Variables>>,
): PrefixedMutationResult<Prefix, Data, Variables> => {
  const [mutation, { data, ...restMutationResult }] = useMutation<
    GraphQlResponse<Data>,
    GraphQlInput<Variables>
  >(document, options);

  // we need this handler to avoid unhandled promises
  const handleMutation = async (
    input: Variables,
  ): Promise<Data | undefined> => {
    try {
      const result = await mutation({
        variables: {
          input,
        },
      });

      // we do nothing with the error since we use the errorLink to handle this
      return result.data?.[DEFAULT_RESPONSE_NAME];
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  const mutationResult: CustomMutationResult<Data, Variables> = {
    data: data?.[DEFAULT_RESPONSE_NAME], // * Response must contain field {DEFAULT_RESPONSE_NAME}
    request: handleMutation,
    ...restMutationResult,
  };

  return {
    [prefix]: mutationResult,
  } as PrefixedMutationResult<Prefix, Data, Variables>;
};
