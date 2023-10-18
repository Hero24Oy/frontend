import { Data, MUTATION, PREFIX, Variables } from './mutation';

import { useCustomMutation, UseMutationWrapper } from '$common/core';

export type UseUnbindUserOfferRequests = UseMutationWrapper<
  typeof PREFIX,
  Data,
  Variables
>;

export const useUnbindUserOfferRequests: UseUnbindUserOfferRequests = (
  ...args
) => useCustomMutation(PREFIX, MUTATION, ...args);
