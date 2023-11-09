import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { initialFormState } from './constants';
import { EmailSignInFormData } from './types';
import { validationSchema } from './validation';

export const useLogic = () => {
  const onSubmit = (_data: EmailSignInFormData): void => {
    // TODO -- add onSubmit logic
  };

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<EmailSignInFormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: initialFormState,
    mode: 'onSubmit',
  });

  const onSubmitHandler = useCallback(() => handleSubmit(onSubmit)(), []);

  return { control, onSubmitHandler, isLoading: isSubmitting };
};
