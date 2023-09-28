import { useCustomMutation, UseMutationWrapper } from '../../../../../core';

import { MUTATION, Response, Variables } from './mutation';

const PREFIX = 'acceptOfferChanges';

export type UseAcceptOfferChanges = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useAcceptOfferChanges: UseAcceptOfferChanges = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
