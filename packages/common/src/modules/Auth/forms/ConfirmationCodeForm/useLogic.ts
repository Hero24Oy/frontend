import { yupResolver } from '@hookform/resolvers/yup';

import { CODE_LENGTH, initialFormState } from './constants';
import { ConfirmationCodeFormData } from './types';
import { confirmationCodeFormValidationSchema } from './validation';

import { useCustomForm, useFieldValidation } from '$common';

export const useLogic = () => {
  const onSubmit = (_data: ConfirmationCodeFormData): void => {
    // TODO -- add onSubmit logic
  };

  const { control, onSubmitHandler, isLoading } =
    useCustomForm<ConfirmationCodeFormData>({
      resolver: yupResolver(confirmationCodeFormValidationSchema(CODE_LENGTH)),
      defaultValues: initialFormState,
      mode: 'onSubmit',
      onSubmit,
    });

  const isCodeValid = useFieldValidation({ control, name: 'code' });

  const onSendOneMoreTimeHandler = (): void => {
    // TODO -- add logic here
  };

  return {
    control,
    onSubmitHandler,
    isLoading,
    isCodeValid,
    onSendOneMoreTimeHandler,
  };
};
