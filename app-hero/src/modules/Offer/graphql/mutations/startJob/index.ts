import { MUTATION, Response, Variables } from './mutation';

import { useCustomMutation, UseMutationWrapper } from '$common';

const PREFIX = 'startJob';

export type UseStartJob = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useStartJob: UseStartJob = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
