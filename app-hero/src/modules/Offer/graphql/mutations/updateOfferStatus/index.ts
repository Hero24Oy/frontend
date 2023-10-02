import { MUTATION, Variables } from './mutation';

import { useCustomMutation, UseMutationWrapper } from '$common';

const PREFIX = 'updateOfferStatus';

export type UseUpdateOfferStatus = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useUpdateOfferStatus: UseUpdateOfferStatus = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);

export type UseLazyGetOffer = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;
