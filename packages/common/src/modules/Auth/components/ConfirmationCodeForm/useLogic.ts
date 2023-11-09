import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { CODE_LENGTH, initialFormState } from './constants';
import { ConfirmationCodeFormData } from './types';
import { validationSchema } from './validation';

export const useLogic = () => {
  const onSubmit = (_data: ConfirmationCodeFormData): void => {
    // TODO -- add onSubmit logic
  };

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useForm<ConfirmationCodeFormData>({
    resolver: yupResolver(validationSchema(CODE_LENGTH)),
    defaultValues: initialFormState,
    mode: 'onChange',
  });

  const onSubmitHandler = useCallback(() => handleSubmit(onSubmit)(), []);

  const onSendOneMoreTimeHandler = (): void => {
    // TODO -- add logic here
  };

  return {
    control,
    onSubmitHandler,
    isLoading: isSubmitting,
    isValid,
    onSendOneMoreTimeHandler,
  };
};
