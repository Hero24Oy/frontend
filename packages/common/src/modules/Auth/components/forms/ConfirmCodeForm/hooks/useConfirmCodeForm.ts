import { yupResolver } from '@hookform/resolvers/yup';
import { confirmCodeFormValidationSchema } from 'core/validation';
import { Control, useForm } from 'react-hook-form';

interface FormData {
  code: string;
}

export interface Props {
  codeLength: number;
  onSubmit: (data: FormData) => void;
}

interface ReturnType {
  control: Control<FormData>;
  isValid: boolean;
  onFormSubmit: () => void;
}

export const useConfirmCodeForm = (props: Props): ReturnType => {
  const { codeLength, onSubmit } = props;

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormData>({
    resolver: yupResolver(confirmCodeFormValidationSchema(codeLength)),
    defaultValues: {
      code: '',
    },
    mode: 'onChange',
  });

  const onFormSubmit = (): void => {
    void handleSubmit(onSubmit)();
  };

  return { onFormSubmit, control, isValid };
};
