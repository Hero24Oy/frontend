import { useCustomMutation, UseMutationWrapper } from '../../../../../core';

import { MUTATION, Response, Variables } from './mutation';

const PREFIX = 'toggleJobStatus';

export type UseToggleJobStatus = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useToggleJobStatus: UseToggleJobStatus = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
