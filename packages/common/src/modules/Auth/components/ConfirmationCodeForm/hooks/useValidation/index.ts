import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { CODE_LENGTH } from '../../constants';

import {
  ConfirmationCodeFormData,
  initialFormState,
  validationSchema,
} from './validation';

import { parseError } from '$core';
import { useAuthentication, useVerifyCode } from '$modules/Auth/hooks';
import { handleAuthError } from '$modules/Auth/utils';

export const useValidation = () => {
  const { signInWithCredentials } = useAuthentication();
  const { verifyCode } = useVerifyCode({
    onAuthSucceed: signInWithCredentials,
    onAuthFailed: handleAuthError,
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid },
    watch,
  } = useForm<ConfirmationCodeFormData>({
    resolver: yupResolver<ConfirmationCodeFormData>(validationSchema),
    defaultValues: initialFormState,
    mode: 'onChange',
  });
  const onSubmit = useCallback(
    handleSubmit(async (data: ConfirmationCodeFormData) => {
      try {
        const { code } = data;

        await verifyCode(code);
      } catch (error) {
        const parsedError = parseError(error);

        handleAuthError(parsedError);
      }
    }),
    [verifyCode, handleSubmit],
  );

  // If last length of code equals to amount of cells, then call onSubmit automatically
  useEffect(() => {
    const subscription = watch(({ code }) => {
      void (async () => {
        try {
          if (code?.length === CODE_LENGTH) {
            await onSubmit(undefined);
          }
        } catch (error) {
          const parsedError = parseError(error);

          handleAuthError(parsedError);
        }
      })();
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return {
    control,
    isSubmitting,
    isValid,
    onSubmit,
  };
};
