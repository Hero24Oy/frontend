import { useCustomMutation, UseMutationWrapper } from '@hero24/common';

import { MUTATION, PREFIX, Response, Variables } from './mutation';

export type UseAcceptOfferChanges = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useAcceptOfferChanges: UseAcceptOfferChanges = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
