import { Data, MUTATION, PREFIX, Variables } from './mutation';

import { useCustomMutation, UseMutationWrapper } from '$common/core';

export type { UserDataInput } from './mutation';

export type UseCreateUser = UseMutationWrapper<typeof PREFIX, Data, Variables>;

export const useCreateUser: UseCreateUser = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
