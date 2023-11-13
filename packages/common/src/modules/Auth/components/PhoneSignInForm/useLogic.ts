import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { initialFormState } from './constants';
import { PhoneSignInFormData, PhoneSignInFormProps } from './types';
import { validationSchema } from './validation';

import { parseError } from '$core/utils';
import { useSendVerificationCode } from '$modules/Auth/hooks';
import { usePhoneAuthStore } from '$modules/Auth/stores';
import { handleAuthError } from '$modules/Auth/utils';

export const useLogic = (params: PhoneSignInFormProps) => {
  const { signInWithPhoneCallback } = params;
  const { reCaptcha } = usePhoneAuthStore();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useForm<PhoneSignInFormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: initialFormState,
    mode: 'onSubmit',
  });

  const { sendVerificationCode } = useSendVerificationCode({
    onAuthFailed: handleAuthError,
  });

  const onSubmit = useCallback(
    handleSubmit(async (data: PhoneSignInFormData) => {
      try {
        if (!reCaptcha) {
          throw new Error('Recaptcha is not initialized');
        }

        const phoneNumber = (data.code + data.phone).replace(' ', '');

        await sendVerificationCode({
          phoneNumber,
          reCaptcha,
        });

        signInWithPhoneCallback();
      } catch (error) {
        // TODO handle and show auth error in UI
        const parsedError = parseError(error);

        handleAuthError(parsedError);
      }
    }),
    [reCaptcha, handleSubmit],
  );

  return {
    control,
    onSubmitHandler: onSubmit,
    isLoading: isSubmitting,
    isValid,
  };
};
