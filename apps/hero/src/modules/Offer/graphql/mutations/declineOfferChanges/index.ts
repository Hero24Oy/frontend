import { useCustomMutation, UseMutationWrapper } from '@hero24/common';

import { MUTATION, PREFIX, Response, Variables } from './mutation';

export type UseDeclineOfferChanges = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useDeclineOfferChanges: UseDeclineOfferChanges = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
