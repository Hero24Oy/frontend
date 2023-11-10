import { yupResolver } from '@hookform/resolvers/yup';
import { emailSignInFormValidationSchema } from 'core/validation';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { useAuthentication, useEmailSignIn } from '../../hooks';
import { handleAuthError } from '../../utils';

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

  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(emailSignInFormValidationSchema),
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
  };
};
