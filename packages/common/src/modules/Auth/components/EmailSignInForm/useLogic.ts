import { yupResolver } from '@hookform/resolvers/yup';
import { emailSignInFormValidationSchema } from 'core/validation';
import { useForm } from 'react-hook-form';

interface FormData {
  email: string;
  password: string;
}

export const useLogic = () => {
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
