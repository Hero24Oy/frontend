import { useState } from 'react';
import {
  Control,
  FieldValues,
  useForm as useReactHookForm,
  UseFormProps,
} from 'react-hook-form';

type Params<FormType extends FieldValues> = Pick<
  UseFormProps<FormType>,
  'defaultValues' | 'mode' | 'resolver'
> & {
  onSubmit: (data: FormType) => Promise<void> | void;
};

type ReturnType<FormType extends FieldValues> = {
  control: Control<FormType>;
  isLoading: boolean;
  onSubmitHandler: () => Promise<void>;
};

export const useCustomForm = <FormType extends FieldValues>(
  params: Params<FormType>,
): ReturnType<FormType> => {
  const { defaultValues, resolver, onSubmit, mode } = params;
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit } = useReactHookForm<FormType>({
    resolver,
    defaultValues,
    mode,
  });

  const onSubmitHandler = async (): Promise<void> => {
    setIsLoading(true);
    await handleSubmit(async (data): Promise<void> => {
      await onSubmit(data);
    })();
    setIsLoading(false);
  };

  return {
    control,
    onSubmitHandler,
    isLoading,
  };
};
