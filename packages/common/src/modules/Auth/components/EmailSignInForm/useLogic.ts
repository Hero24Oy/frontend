import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { useAuthentication, useEmailSignIn } from '../../hooks';
import { handleAuthError } from '../../utils';

import { validationSchema } from './validation';

interface FormData {
  email: string;
  password: string;
}

export const useLogic = () => {
  const { signInWithCredentials } = useAuthentication();

  const { signInWithEmail } = useEmailSignIn({
    onAuthSucceed: signInWithCredentials,
    onAuthFailed: handleAuthError,
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
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
