import { MUTATION, Response, Variables } from './mutation';

import { useCustomMutation, UseMutationWrapper } from '$common';

const PREFIX = 'cancelRequestToExtend';

export type UseCancelRequestToExtend = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useCancelRequestToExtend: UseCancelRequestToExtend = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
