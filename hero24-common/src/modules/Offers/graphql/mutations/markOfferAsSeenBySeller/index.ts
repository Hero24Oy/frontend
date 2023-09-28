import { useCustomMutation, UseMutationWrapper } from '../../../../../core';

import { MUTATION, Response, Variables } from './mutation';

const PREFIX = 'markOfferAsSeenBySeller';

export type UseMarkOfferAsSeenBySeller = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useMarkOfferAsSeenBySeller: UseMarkOfferAsSeenBySeller = (
  ...args
) => useCustomMutation(PREFIX, MUTATION, ...args);
