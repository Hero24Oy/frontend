import { MUTATION, Response, Variables } from './mutation';

import { useCustomMutation, UseMutationWrapper } from '$common';

const PREFIX = 'declineOfferChanges';

export type UseDeclineOfferChanges = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useDeclineOfferChanges: UseDeclineOfferChanges = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
