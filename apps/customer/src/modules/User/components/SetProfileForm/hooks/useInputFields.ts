import { useMemo } from 'react';
import { $Keys } from 'utility-types';

import { InputField } from '../components';
import { SetProfileFormData } from '../validation';

type UseInputFields = {
  isEmailProvided: boolean;
};

export const useInputFields = (params: UseInputFields) => {
  const { isEmailProvided } = params;

  const basicInputFields = useMemo<InputField<$Keys<SetProfileFormData>>[]>(
    () => [
      {
        name: 'firstName',
        title: 'First name',
        placeholder: 'Enter',
      },
      {
        name: 'lastName',
        title: 'Last name',
        placeholder: 'Enter',
      },
      {
        name: 'email',
        title: 'Email',
        placeholder: 'Enter',
        isDisabled: isEmailProvided,
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
    basicInputFields,
    businessCustomerInputFields,
  };
};
