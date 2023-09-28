import { useCustomMutation, UseMutationWrapper } from '../../../../../core';

import { MUTATION, Response, Variables } from './mutation';

const PREFIX = 'cancelRequestToExtend';

export type UseCancelRequestToExtend = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useCancelRequestToExtend: UseCancelRequestToExtend = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
