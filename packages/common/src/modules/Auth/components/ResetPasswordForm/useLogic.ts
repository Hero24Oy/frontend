import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { initialFormState } from './constants';
import { ResetPasswordFormData, ResetPasswordFormProps } from './types';
import { validationSchema } from './validation';

export const useLogic = (params: ResetPasswordFormProps) => {
  const { onSuccessCallback } = params;

  const onSubmit = (_data: ResetPasswordFormData): void => {
    // TODO -- add onSubmit logic
  };

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useForm<ResetPasswordFormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: initialFormState,
    mode: 'onChange',
  });

  const onSubmitHandler = useCallback(async () => {
    await handleSubmit(onSubmit)();
    onSuccessCallback();
  }, [onSuccessCallback]);

  return {
    control,
    onSubmitHandler,
    isLoading: isSubmitting,
    isValid,
  };
};
