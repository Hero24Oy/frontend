import { MUTATION, Response, Variables } from './mutation';

import { useCustomMutation, UseMutationWrapper } from '$common';

const PREFIX = 'toggleJobStatus';

export type UseToggleJobStatus = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useToggleJobStatus: UseToggleJobStatus = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
