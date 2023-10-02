import { MUTATION, Response, Variables } from './mutation';

import { useCustomMutation, UseMutationWrapper } from '$common';

const PREFIX = 'acceptOfferChanges';

export type UseAcceptOfferChanges = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useAcceptOfferChanges: UseAcceptOfferChanges = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
