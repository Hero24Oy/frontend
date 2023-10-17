import { useCustomMutation, UseMutationWrapper } from '@hero24/common';

import { MUTATION, PREFIX, Response, Variables } from './mutation';

export type UseToggleJobStatus = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useToggleJobStatus: UseToggleJobStatus = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
