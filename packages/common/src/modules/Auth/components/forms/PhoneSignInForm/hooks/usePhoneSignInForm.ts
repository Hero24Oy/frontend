import { yupResolver } from '@hookform/resolvers/yup';
import { phoneSignInFormValidationSchema } from 'core/validation';
import { Control, useForm, UseFormSetValue } from 'react-hook-form';

interface FormData {
  phone: string;
  callingCode?: string;
}

interface ReturnType {
  control: Control<FormData>;
  onSubmit: () => void;
  setValue: UseFormSetValue<FormData>;
}

export const usePhoneSignInForm = (): ReturnType => {
  const { control, handleSubmit, setValue } = useForm<FormData>({
    resolver: yupResolver(phoneSignInFormValidationSchema),
    defaultValues: {
      phone: '',
      callingCode: '',
    },
    mode: 'onSubmit',
  });

  const onSubmit = (): void => {
    void handleSubmit((_data: FormData): void => {
      return undefined;
    })();
  };

  return { onSubmit, control, setValue };
};
