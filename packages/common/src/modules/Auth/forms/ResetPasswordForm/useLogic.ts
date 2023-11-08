import { yupResolver } from '@hookform/resolvers/yup';

import { initialFormState } from './constants';
import { ResetPasswordFormData, ResetPasswordFormProps } from './types';
import { resetPasswordFormValidationSchema } from './validation';

import { useCustomForm, useFieldValidation } from '$common';

export const useLogic = (params: ResetPasswordFormProps) => {
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
