import { useCustomMutation, UseMutationWrapper } from '../../../../../core';

import { MUTATION, Response, Variables } from './mutation';

const PREFIX = 'declineOfferChanges';

export type UseDeclineOfferChanges = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useDeclineOfferChanges: UseDeclineOfferChanges = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
