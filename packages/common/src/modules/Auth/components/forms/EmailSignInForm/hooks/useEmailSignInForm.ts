import { yupResolver } from '@hookform/resolvers/yup';
import { emailSignInFormValidationSchema } from 'core/validation';
import { useEmailSignIn } from 'modules/Auth/hooks';
import { Control, useForm } from 'react-hook-form';

interface FormData {
  email: string;
  password: string;
}

interface ReturnType {
  control: Control<FormData>;
  signInHandler: () => void;
}

export const useEmailSignInForm = (): ReturnType => {
  const { signInWithEmail } = useEmailSignIn();

  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(emailSignInFormValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  });

  const signIn = async (data: FormData): Promise<void> => {
    try {
      await signInWithEmail(data);
    } catch (error) {
      console.error(error);
    }
  };

  const signInHandler = handleSubmit(signIn);

  return { signInHandler, control };
};
