import { MUTATION, PREFIX, Response, Variables } from './mutation';

import { useCustomMutation, UseMutationWrapper } from '@hero24/common';

export type UseCancelRequestToExtend = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useCancelRequestToExtend: UseCancelRequestToExtend = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
