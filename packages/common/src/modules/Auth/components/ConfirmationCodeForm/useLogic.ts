import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { useAuthentication, useVerifyCode } from '../../hooks';
import { handleAuthError } from '../../utils';

import { CODE_LENGTH, initialFormState } from './constants';
import { ConfirmationCodeFormData } from './types';
import { validationSchema } from './validation';

export const useLogic = () => {
  const { signInWithCredentials } = useAuthentication();

  const { verifyCode } = useVerifyCode({
    onAuthSucceed: signInWithCredentials,
    onAuthFailed: handleAuthError,
  });

  const onSubmit = async (data: ConfirmationCodeFormData) => {
    const { code } = data;

    await verifyCode(code);
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

  // TODO debounce
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
