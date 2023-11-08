import { yupResolver } from '@hookform/resolvers/yup';

import { initialFormState } from './constants';
import { EmailSignInFormData } from './types';
import { emailSignInFormValidationSchema } from './validation';

import { useCustomForm } from '$common';

export const useLogic = () => {
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
