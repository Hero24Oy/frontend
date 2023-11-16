import { Control, FieldValues, Path, useController } from 'react-hook-form';

type UseLogicParams<Type extends FieldValues> = {
  control: Control<Type>;
  name: Path<Type>;
};

export const useLogic = <Type extends FieldValues>(
  params: UseLogicParams<Type>,
) => {
  const {
    field: { value: isBusinessCustomer },
  } = useController(params);

  return {
    isBusinessCustomer,
  };
};
