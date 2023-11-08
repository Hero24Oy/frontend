import { FieldValues, useForm as useReactHookForm } from 'react-hook-form';

import { Params, ReturnType } from './types';

export const useCustomForm = <FormType extends FieldValues>(
  params: Params<FormType>,
): ReturnType<FormType> => {
  const { defaultValues, resolver, onSubmit, mode } = params;

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useReactHookForm<FormType>({
    resolver,
    defaultValues,
    mode,
  });

  const onSubmitHandler = async (): Promise<void> => {
    await handleSubmit(async (data): Promise<void> => {
      await onSubmit(data);
    })();
  };

  return {
    control,
    onSubmitHandler,
    isLoading: isSubmitting,
  };
};
