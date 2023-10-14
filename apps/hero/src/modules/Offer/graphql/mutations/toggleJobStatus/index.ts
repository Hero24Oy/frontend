import { MUTATION, PREFIX, Response, Variables } from './mutation';

import { useCustomMutation, UseMutationWrapper } from '$common';

export type UseToggleJobStatus = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useToggleJobStatus: UseToggleJobStatus = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
