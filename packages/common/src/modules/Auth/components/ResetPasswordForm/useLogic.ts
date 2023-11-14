import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { initialFormState } from './constants';
import { ResetPasswordFormData, ResetPasswordFormProps } from './types';
import { validationSchema } from './validation';

import { parseError } from '$core';
import { useResetEmailPassword } from '$modules/Auth/hooks';
import { handleAuthError } from '$modules/Auth/utils';

export const useLogic = (params: ResetPasswordFormProps) => {
  const { onSuccessCallback } = params;

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useForm<ResetPasswordFormData>({
    resolver: yupResolver<ResetPasswordFormData>(validationSchema),
    defaultValues: initialFormState,
    mode: 'onChange',
  });

  const { resetPassword } = useResetEmailPassword({
    onAuthSucceed: onSuccessCallback,
  });

  const onSubmitHandler = useCallback(
    handleSubmit(async (data: ResetPasswordFormData) => {
      try {
        const { email } = data;

        await resetPassword(email);
      } catch (error) {
        const parsedError = parseError(error);

        handleAuthError(parsedError);
      }
    }),
    [],
  );

  return {
    control,
    onSubmitHandler,
    isLoading: isSubmitting,
    isValid,
  };
};
