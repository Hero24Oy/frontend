import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { useAuthentication, useVerifyCode } from '../../hooks';
import { handleAuthError } from '../../utils';

import { CODE_LENGTH, initialFormState } from './constants';
import { ConfirmationCodeFormData } from './types';
import { validationSchema } from './validation';

import { parseError } from '$common/core';

export const useLogic = () => {
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

  const { signInWithCredentials } = useAuthentication();

  const { verifyCode } = useVerifyCode({
    onAuthSucceed: signInWithCredentials,
    onAuthFailed: handleAuthError,
  });

  const onSubmit = useCallback(
    async (data: ConfirmationCodeFormData) => {
      const { code } = data;

      await verifyCode(code);
    },
    [verifyCode],
  );

  const onSubmitHandler = useMemo(() => handleSubmit(onSubmit), [onSubmit]);

  // If last length of code equals to amount of cells, then call onSubmit automatically
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

  const onSendOneMoreTimeHandler = (): void => {
    // TODO implement debounce
  };

  return {
    control,
    onSubmitHandler,
    isLoading: isSubmitting,
    isValid,
    onSendOneMoreTimeHandler,
  };
};
