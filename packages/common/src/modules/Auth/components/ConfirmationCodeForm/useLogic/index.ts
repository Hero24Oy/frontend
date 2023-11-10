import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { CODE_LENGTH, initialFormState } from '../constants';
import { ConfirmationCodeFormData } from '../types';
import { validationSchema } from '../validation';

import { useSendOneMoreTime } from './useSendOneMoreTime';

import { parseError } from '$core';
import { useAuthentication, useVerifyCode } from '$modules/Auth/hooks';

export const useLogic = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid },
    watch,
  } = useForm<ConfirmationCodeFormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: initialFormState,
    mode: 'onChange',
  });
  const [errorText, setErrorText] = useState<string | null>(null);
  const setError = useCallback(
    (error: Error) => setErrorText(error.message),
    [],
  );

  const { signInWithCredentials } = useAuthentication();
  const { verifyCode } = useVerifyCode({
    onAuthSucceed: signInWithCredentials,
    onAuthFailed: setError,
  });
  const { sendOneMoreTime, debounceTime } = useSendOneMoreTime({
    onAuthFailed: setError,
  });

  const onSubmitHandler = useCallback(
    handleSubmit(async (data: ConfirmationCodeFormData) => {
      try {
        const { code } = data;

        await verifyCode(code);
      } catch (error) {
        const parsedError = parseError(error);
        setErrorText(parsedError.message);
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
            await onSubmitHandler(undefined);
          }
        } catch (error) {
          const parsedError = parseError(error);
          setErrorText(parsedError.message);
        }
      })();
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return {
    control,
    debounceTime,
    onSubmitHandler,
    isLoading: isSubmitting,
    isValid,
    onSendOneMoreTimeHandler: sendOneMoreTime,
    errorText,
  };
};
