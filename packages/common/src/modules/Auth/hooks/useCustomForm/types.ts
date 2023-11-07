import { Control, FieldValues, UseFormProps } from 'react-hook-form';

export type Params<FormType extends FieldValues> = Pick<
  UseFormProps<FormType>,
  'defaultValues' | 'mode' | 'resolver'
> & {
  onSubmit: (data: FormType) => Promise<void> | void;
};

export type ReturnType<FormType extends FieldValues> = {
  control: Control<FormType>;
  isLoading: boolean;
  onSubmitHandler: () => Promise<void>;
};
