import { yupResolver } from '@hookform/resolvers/yup';
import { emailSignInFormValidationSchema } from 'core/validation';
import { useForm } from 'react-hook-form';

// import { useAuthentication, useEmailSignIn } from '../../hooks';

interface FormData {
  email: string;
  password: string;
}

export const useLogic = () => {
  // const { signInWithCredentials } = useAuthentication();
  // const { signInWithEmail } = useEmailSignIn({});

  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(emailSignInFormValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (): void => {
    void handleSubmit((_data: FormData): void => {
      return undefined;
    })();
  };

  return {
    onSubmit,
    control,
  };
};
