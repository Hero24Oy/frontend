import { useCustomMutation, UseMutationWrapper } from '@hero24/common';

import { MUTATION, PREFIX, Response, Variables } from './mutation';

export type UseExtendOfferDuration = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useExtendOfferDuration: UseExtendOfferDuration = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
