import { Control, FieldValues, Path, useController } from 'react-hook-form';

type UseLogicParams<Type extends FieldValues> = {
  control: Control<Type>;
  name: Path<Type>;
  isDisabled?: boolean;
};

export const useLogic = <Type extends FieldValues>(
  params: UseLogicParams<Type>,
) => {
  const { control, name, isDisabled } = params;

  const {
    field: { value, onChange },
  } = useController({ name, control });

  return {
    value,
    control,
    isDisabled,
    onToggle: onChange,
  };
};
