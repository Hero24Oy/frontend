import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { initialFormState } from './constants';
import { PhoneSignInFormData, PhoneSignInFormProps } from './types';
import { validationSchema } from './validation';

import { useSendVerificationCode } from '$modules/Auth/hooks';
import { usePhoneAuthStore } from '$modules/Auth/stores';

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

  const { sendVerificationCode } = useSendVerificationCode({});

  const onSubmit = useCallback(
    handleSubmit(async (data: PhoneSignInFormData) => {
      if (!reCaptcha) {
        throw new Error('Recaptcha is not initialized');
      }

      const phoneNumber = (data.code + data.phone).replace(' ', '');

      await sendVerificationCode({
        phoneNumber,
        reCaptcha,
      });
    }),
    [reCaptcha, handleSubmit],
  );

  const onSubmitHandler = useCallback(async () => {
    await onSubmit();

    signInWithPhoneCallback();
  }, [onSubmit, signInWithPhoneCallback]);

  return {
    control,
    onSubmitHandler,
    isLoading: isSubmitting,
    isValid,
  };
};
