import { useCachedGraphQlUser } from '@hero24/common';

import { useInputFields } from './useInputFields';
import { useValidation, UseValidationParams } from './useValidation';

export type UseLogicParams = UseValidationParams;

export const useLogic = (params: UseLogicParams) => {
  const validation = useValidation(params);
  const {
    user: {
      data: { email },
    },
  } = useCachedGraphQlUser();

  const isEmailProvided = Boolean(email);
  const inputFields = useInputFields({ isEmailProvided });

  return {
    ...validation,
    ...inputFields,
    isEmailProvided,
  };
};
