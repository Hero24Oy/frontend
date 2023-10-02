import { MUTATION, Response, Variables } from './mutation';

import { useCustomMutation, UseMutationWrapper } from '$common';

const PREFIX = 'markOfferAsSeenByHero';

export type UseMarkOfferAsSeenByHero = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useMarkOfferAsSeenByHero: UseMarkOfferAsSeenByHero = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
