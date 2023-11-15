import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { EmailSignInFormData } from './types';
import { validationSchema } from './validation';

import { useAuthentication, useEmailAuth } from '$modules/Auth/hooks';
import { handleAuthError } from '$modules/Auth/utils';

interface FormData {
  email: string;
  password: string;
}

export const useLogic = () => {
  const { signInWithCredentials } = useAuthentication();

  const { signInWithEmail } = useEmailAuth({
    onAuthSucceed: signInWithCredentials,
    onAuthFailed: handleAuthError,
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver<EmailSignInFormData>(validationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = useMemo(() => handleSubmit(signInWithEmail), []);

  return {
    onSubmit,
    control,
    isLoading: isSubmitting,
  };
};
