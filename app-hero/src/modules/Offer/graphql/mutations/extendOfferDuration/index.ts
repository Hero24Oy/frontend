import { MUTATION, Response, Variables } from './mutation';

import { useCustomMutation, UseMutationWrapper } from '$common';

const PREFIX = 'extendOfferDuration';

export type UseExtendOfferDuration = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useExtendOfferDuration: UseExtendOfferDuration = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
