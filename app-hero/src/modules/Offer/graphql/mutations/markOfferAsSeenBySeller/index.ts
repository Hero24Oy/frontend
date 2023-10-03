import { MUTATION, PREFIX, Response, Variables } from './mutation';

import { useCustomMutation, UseMutationWrapper } from '$common';

export type UseMarkOfferAsSeenBySeller = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useMarkOfferAsSeenBySeller: UseMarkOfferAsSeenBySeller = (
  ...args
) => useCustomMutation(PREFIX, MUTATION, ...args);
