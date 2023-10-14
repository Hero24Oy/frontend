import { useCustomMutation, UseMutationWrapper } from '../../../../../core';

import { Data, MUTATION, PREFIX, Variables } from './mutation';

export type { UserDataInput } from './mutation';

export type UseCreateUser = UseMutationWrapper<typeof PREFIX, Data, Variables>;

export const useCreateUser: UseCreateUser = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
