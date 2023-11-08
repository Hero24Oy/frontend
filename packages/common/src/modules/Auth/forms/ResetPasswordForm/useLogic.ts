import { yupResolver } from '@hookform/resolvers/yup';
import { Control } from 'react-hook-form';

import { initialFormState } from './constants';
import { ResetPasswordFormData, ResetPasswordFormProps } from './types';

import { resetPasswordFormValidationSchema } from '$common/core';
import { useCustomForm, useFieldValidation } from '$common/modules';

type ReturnType = {
  control: Control<ResetPasswordFormData>;
  isEmailValid: boolean;
  isLoading: boolean;
  onSubmitHandler: () => Promise<void>;
};

export const useLogic = (params: ResetPasswordFormProps): ReturnType => {
  const { onSuccessResetPasswordCallback } = params;

  const onSubmit = (_data: ResetPasswordFormData): void => {
    onSuccessResetPasswordCallback();
  };

  const { control, onSubmitHandler, isLoading } =
    useCustomForm<ResetPasswordFormData>({
      resolver: yupResolver(resetPasswordFormValidationSchema),
      defaultValues: initialFormState,
      mode: 'onChange',
      onSubmit,
    });

  const isEmailValid = useFieldValidation({ control, name: 'email' });

  return { control, onSubmitHandler, isLoading, isEmailValid };
};
