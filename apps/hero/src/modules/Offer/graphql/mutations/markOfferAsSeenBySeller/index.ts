import { useCustomMutation, UseMutationWrapper } from '@hero24/common';

import { MUTATION, PREFIX, Response, Variables } from './mutation';

export type UseMarkOfferAsSeenBySeller = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useMarkOfferAsSeenBySeller: UseMarkOfferAsSeenBySeller = (
  ...args
) => useCustomMutation(PREFIX, MUTATION, ...args);
