import { MUTATION, PREFIX, Response, Variables } from './mutation';

import { useCustomMutation, UseMutationWrapper } from '$common';

export type UseMarkOfferAsSeenByHero = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useMarkOfferAsSeenByHero: UseMarkOfferAsSeenByHero = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
