import { yupResolver } from '@hookform/resolvers/yup';
import { Control } from 'react-hook-form';

import { initialFormState } from './constants';
import { EmailSignInFormData } from './types';

import { emailSignInFormValidationSchema } from '$common/core';
import { useCustomForm } from '$common/modules';

type ReturnType = {
  control: Control<EmailSignInFormData>;
  isLoading: boolean;
  onSubmitHandler: () => Promise<void>;
};

export const useLogic = (): ReturnType => {
  const onSubmit = (_data: EmailSignInFormData): void => {
    // TODO -- add onSubmit logic
  };

  const { control, onSubmitHandler, isLoading } =
    useCustomForm<EmailSignInFormData>({
      resolver: yupResolver(emailSignInFormValidationSchema),
      defaultValues: initialFormState,
      mode: 'onSubmit',
      onSubmit,
    });

  return { control, onSubmitHandler, isLoading };
};
