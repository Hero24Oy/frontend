import { Control, FieldValues, Path, useController } from 'react-hook-form';

type Params<FormType extends FieldValues> = {
  control: Control<FormType>;
  name: Path<FormType>;
};

export const useFieldValidation = <FormType extends FieldValues>(
  params: Params<FormType>,
): boolean => {
  const { control, name } = params;

  const {
    formState: { isDirty },
    fieldState: { error },
  } = useController({ control, name });

  return isDirty && !error;
};
