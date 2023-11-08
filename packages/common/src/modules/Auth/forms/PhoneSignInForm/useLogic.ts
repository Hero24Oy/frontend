import { yupResolver } from '@hookform/resolvers/yup';

import { initialFormState } from './constants';
import { PhoneSignInFormData, PhoneSignInFormProps } from './types';
import { phoneSignInFormValidationSchema } from './validation';

import { useCustomForm, useFieldValidation } from '$common';

export const useLogic = (params: PhoneSignInFormProps) => {
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
