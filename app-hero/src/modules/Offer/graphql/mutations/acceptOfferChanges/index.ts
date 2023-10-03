import { MUTATION, PREFIX, Response, Variables } from './mutation';

import { useCustomMutation, UseMutationWrapper } from '$common';

export type UseAcceptOfferChanges = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useAcceptOfferChanges: UseAcceptOfferChanges = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
