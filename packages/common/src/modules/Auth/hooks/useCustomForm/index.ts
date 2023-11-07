import { useState } from 'react';
import { FieldValues, useForm as useReactHookForm } from 'react-hook-form';

import { Params, ReturnType } from './types';

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
