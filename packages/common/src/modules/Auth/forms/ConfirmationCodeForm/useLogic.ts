import { yupResolver } from '@hookform/resolvers/yup';
import { Control } from 'react-hook-form';

import { CODE_LENGTH, initialFormState } from './constants';
import { ConfirmationCodeFormData } from './types';

import { confirmationCodeFormValidationSchema } from '$common/core';
import { useCustomForm, useFieldValidation } from '$common/modules';

type ReturnType = {
  control: Control<ConfirmationCodeFormData>;
  isCodeValid: boolean;
  isLoading: boolean;
  onSendOneMoreTimeHandler: () => void;
  onSubmitHandler: () => Promise<void>;
};

export const useLogic = (): ReturnType => {
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
