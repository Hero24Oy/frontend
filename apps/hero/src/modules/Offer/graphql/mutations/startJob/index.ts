import { MUTATION, PREFIX, Response, Variables } from './mutation';

import { useCustomMutation, UseMutationWrapper } from '@hero24/common';

export type UseStartJob = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useStartJob: UseStartJob = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
