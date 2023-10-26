import { Control, FieldValues, Path } from 'react-hook-form';
import {
  CodeFieldProps,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

export type ConfirmCodeInputProps<Type extends FieldValues> = {
  cellCount: number;
  control: Control<Type>;
  name: Path<Type>;
};

export type CellProps = ReturnType<typeof useClearByFocusCell>[0];

export type GetCellOnLayoutHandler = ReturnType<typeof useClearByFocusCell>[1];

export type OnChangeText = Required<CodeFieldProps>['onChangeText'];
