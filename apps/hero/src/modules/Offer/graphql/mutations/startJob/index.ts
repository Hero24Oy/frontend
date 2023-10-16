import { useCustomMutation, UseMutationWrapper } from '@hero24/common';

import { MUTATION, PREFIX, Response, Variables } from './mutation';

export type UseStartJob = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useStartJob: UseStartJob = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
