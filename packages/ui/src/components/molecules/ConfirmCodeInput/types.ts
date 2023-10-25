import { Control, FieldValues, Path } from 'react-hook-form';

export type ConfirmCodeInputProps<Type extends FieldValues> = {
  cellCount: number;
  control: Control<Type>;
  name: Path<Type>;
};