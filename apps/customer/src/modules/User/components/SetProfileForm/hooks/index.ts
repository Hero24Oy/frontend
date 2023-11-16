import { useMemo } from 'react';
import { $Keys } from 'utility-types';

import { useCachedGraphQlUser } from '@hero24/common';

import { InputField } from '../components/InputSection';
import { SetProfileFormData } from '../validation';

import { useValidation, UseValidationParams } from './useValidation';

export type UseLogicParams = UseValidationParams;

export const useLogic = (params: UseLogicParams) => {
  const validation = useValidation(params);
  const {
    user: {
      data: { email },
    },
  } = useCachedGraphQlUser();

  const { control } = validation;

  const isEmailProvided = Boolean(email);
  const basicInputFields = useMemo<InputField<$Keys<SetProfileFormData>>[]>(
    () => [
      {
        name: 'firstName',
        title: 'First name',
        placeholder: 'Enter',
        control,
      },
      {
        name: 'lastName',
        title: 'Last name',
        placeholder: 'Enter',
        control,
      },
      {
        name: 'email',
        title: 'Email',
        placeholder: 'Enter',
        isDisabled: isEmailProvided,
        control,
      },
    ],
    [],
  );

  const businessCustomerInputFields = useMemo<
    InputField<$Keys<SetProfileFormData>>[]
  >(
    () => [
      {
        name: 'businessId',
        title: 'Business Id',
        placeholder: 'Enter',
      },
      {
        name: 'businessName',
        title: 'Business Name',
        placeholder: 'Enter',
      },
    ],
    [],
  );

  return {
    ...validation,
    isEmailProvided,
    basicInputFields,
    businessCustomerInputFields,
  };
};
