import { yupResolver } from '@hookform/resolvers/yup';
import { Control } from 'react-hook-form';

import { initialFormState } from './constants';
import { PhoneSignInFormData, PhoneSignInFormProps } from './types';

import { phoneSignInFormValidationSchema } from '$common/core';
import { useCustomForm, useFieldValidation } from '$common/modules';

type ReturnType = {
  control: Control<PhoneSignInFormData>;
  isLoading: boolean;
  isPhoneValid: boolean;
  onSubmitHandler: () => Promise<void>;
};

export const useLogic = (params: PhoneSignInFormProps): ReturnType => {
  const { signInWithPhoneCallback } = params;

  const onSubmit = (_data: PhoneSignInFormData): void => {
    // TODO -- add onSubmit logic
    signInWithPhoneCallback();
  };

  const { control, onSubmitHandler, isLoading } =
    useCustomForm<PhoneSignInFormData>({
      resolver: yupResolver(phoneSignInFormValidationSchema),
      defaultValues: initialFormState,
      mode: 'onSubmit',
      onSubmit,
    });

  const isPhoneValid = useFieldValidation({ control, name: 'phone' });

  return { control, onSubmitHandler, isLoading, isPhoneValid };
};
