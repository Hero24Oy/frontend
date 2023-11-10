import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import {
  useAuthentication,
  usePhoneAuthStore,
  useSendVerificationCode,
  useVerifyCode,
} from '../../../hooks';
import { handleAuthError } from '../../../utils';
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

  const { timeLeft, resetTimer } = useTimer({ timeInSeconds: DEBOUNCE_TIME });

  const { signInWithCredentials } = useAuthentication();

  const { verifyCode } = useVerifyCode({
    onAuthSucceed: signInWithCredentials,
    onAuthFailed: handleAuthError,
  });

  const { sendVerificationCode } = useSendVerificationCode({
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

  const { phoneNumber, reCaptcha } = usePhoneAuthStore();
  const onSendOneMoreTimeHandler = useCallback(async () => {
    if (!phoneNumber || !reCaptcha) {
      // TODO this should not happen
      console.error('Phone number or reCaptcha have not been initialized');
      return;
    }

    await sendVerificationCode({ phoneNumber, reCaptcha });
    resetTimer();
  }, [timeLeft, phoneNumber, reCaptcha]);

  return {
    control,
    debounceTime: timeLeft, // TODO better naming
    onSubmitHandler,
    isLoading: isSubmitting,
    isValid,
    onSendOneMoreTimeHandler,
  };
};
