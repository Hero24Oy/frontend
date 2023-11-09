import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { useAuthentication, useVerifyCode } from '../../hooks';
import { handleAuthError } from '../../utils';

import { CODE_LENGTH, initialFormState } from './constants';
import { ConfirmationCodeFormData } from './types';
import { validationSchema } from './validation';

import { parseError } from '$common/core';

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
    watch,
  } = useForm<ConfirmationCodeFormData>({
    resolver: yupResolver(validationSchema(CODE_LENGTH)),
    defaultValues: initialFormState,
    mode: 'onChange',
  });

  const onSubmitHandler = useMemo(() => handleSubmit(onSubmit), []);

  useEffect(() => {
    const subscription = watch(({ code }) => {
      void (async () => {
        try {
          if (code?.length === CODE_LENGTH) {
            await onSubmitHandler(undefined);
          }
        } catch (error) {
          const errorParsed = parseError(error);

          handleAuthError(errorParsed);
        }
      })();
    });

    return () => subscription.unsubscribe();
  }, [watch]);

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
