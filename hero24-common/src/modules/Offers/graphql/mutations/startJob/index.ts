import {
  useCustomMutation,
  UseMutationWrapper,
} from '../../../../../core/apollo';

import { MUTATION, Response, Variables } from './mutation';

const PREFIX = 'startJob';

export type UseStartJob = UseMutationWrapper<
  typeof PREFIX,
  Response,
  Variables
>;

export const useStartJob: UseStartJob = (...args) =>
  useCustomMutation(PREFIX, MUTATION, ...args);
