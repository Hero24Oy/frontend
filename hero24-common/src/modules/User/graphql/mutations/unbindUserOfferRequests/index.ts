import { useCustomMutation, UseMutationWrapper } from '../../../../../core';

import { Data, MUTATION, PREFIX, Variables } from './mutation';
// TODO Now all this logic uses one single editUser mutation, but in the future we should create separate mutations for each hook
export type UseUnbindUserOfferRequests = UseMutationWrapper<
  typeof PREFIX,
  Data,
  Variables
>;

export const useUnbindUserOfferRequests: UseUnbindUserOfferRequests = (
  ...args
) => useCustomMutation(PREFIX, MUTATION, ...args);
