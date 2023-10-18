import { useCustomMutation, UseMutationWrapper } from '../../../../../core';

import { Data, MUTATION, PREFIX, Variables } from './mutation';

export type UseUnbindUserOfferRequests = UseMutationWrapper<
  typeof PREFIX,
  Data,
  Variables
>;

export const useUnbindUserOfferRequests: UseUnbindUserOfferRequests = (
  ...args
) => useCustomMutation(PREFIX, MUTATION, ...args);
