import { useCustomMutation, UseMutationWrapper } from '@hero24/common';

import { MUTATION, PREFIX, Variables } from './mutation';

export type UseUpdateOfferStatus = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useUpdateOfferStatus: UseUpdateOfferStatus = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
