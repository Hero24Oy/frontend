import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  useAuthentication,
  usePhoneAuthStore,
  useSendVerificationCode,
  useVerifyCode,
} from '../../../hooks';
import { CODE_LENGTH, DEBOUNCE_TIME, initialFormState } from '../constants';
import { ConfirmationCodeFormData } from '../types';
import { validationSchema } from '../validation';

import { useTimer } from './useTimer';

import { parseError } from '$core';

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
  const { timeLeft, resetTimer } = useTimer({ timeInSeconds: DEBOUNCE_TIME });
  const { signInWithCredentials } = useAuthentication();

  const { verifyCode } = useVerifyCode({
    onAuthSucceed: signInWithCredentials,
    onAuthFailed: (error) => setErrorText(error.message),
  });

  const { sendVerificationCode } = useSendVerificationCode({
    onAuthFailed: (error) => setErrorText(error.message),
  });

  const onSubmit = useCallback(
    async (data: ConfirmationCodeFormData) => {
      try {
        const { code } = data;

        await verifyCode(code);
      } catch (error) {
        const parsedError = parseError(error);
        setErrorText(parsedError.message);
      }
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
          const parsedError = parseError(error);
          setErrorText(parsedError.message);
        }
      })();
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const { phoneNumber, reCaptcha } = usePhoneAuthStore();
  const onSendOneMoreTimeHandler = useCallback(async () => {
    try {
      if (!phoneNumber || !reCaptcha) {
        // TODO this should not happen
        throw new Error('Phone number or reCaptcha have not been initialized');
      }

      await sendVerificationCode({ phoneNumber, reCaptcha });
      resetTimer();
    } catch (error) {
      const parsedError = parseError(error);
      setErrorText(parsedError.message);
    }
  }, [timeLeft, phoneNumber, reCaptcha]);

  return {
    control,
    debounceTime: timeLeft,
    onSubmitHandler,
    isLoading: isSubmitting,
    isValid,
    onSendOneMoreTimeHandler,
    errorText,
  };
};
