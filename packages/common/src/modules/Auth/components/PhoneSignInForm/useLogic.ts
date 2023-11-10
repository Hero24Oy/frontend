import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { usePhoneAuthStore, useSendVerificationCode } from '../../hooks';

import { initialFormState } from './constants';
import { PhoneSignInFormData, PhoneSignInFormProps } from './types';
import { validationSchema } from './validation';

export const useLogic = (params: PhoneSignInFormProps) => {
  const { signInWithPhoneCallback } = params;
  const { reCaptcha } = usePhoneAuthStore();

  const { sendVerificationCode } = useSendVerificationCode({});

  const onSubmit = useCallback(
    async (data: PhoneSignInFormData) => {
      if (!reCaptcha) {
        throw new Error('Recaptcha is not initialized');
      }

      const phoneNumber = (data.code + data.phone).replace(' ', '');

      await sendVerificationCode({
        phoneNumber,
        reCaptcha,
      });
    },
    [reCaptcha],
  );

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useForm<PhoneSignInFormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: initialFormState,
    mode: 'onSubmit',
  });

  const onSubmitHandler = async () => {
    await handleSubmit(onSubmit)();

    signInWithPhoneCallback();
  };

  return {
    control,
    onSubmitHandler,
    isLoading: isSubmitting,
    isValid,
  };
};
