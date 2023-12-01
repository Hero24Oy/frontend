import { Control, FieldValues, Path } from 'react-hook-form';

export type Params<Type extends FieldValues> = {
  control: Control<Type>;
  name: Path<Type>;
};

export type UseLogicReturnType = {
  badgeValue: number;
  inputText: string;
};
