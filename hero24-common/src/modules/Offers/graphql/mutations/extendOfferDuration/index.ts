import { useCustomMutation, UseMutationWrapper } from '../../../../../core';

import { MUTATION, Response, Variables } from './mutation';

const PREFIX = 'extendOfferDuration';

export type UseExtendOfferDuration = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useExtendOfferDuration: UseExtendOfferDuration = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
