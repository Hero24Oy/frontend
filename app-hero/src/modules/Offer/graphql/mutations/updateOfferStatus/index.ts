import { MUTATION, PREFIX, Variables } from './mutation';

import { useCustomMutation, UseMutationWrapper } from '$common';

export type UseUpdateOfferStatus = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useUpdateOfferStatus: UseUpdateOfferStatus = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
