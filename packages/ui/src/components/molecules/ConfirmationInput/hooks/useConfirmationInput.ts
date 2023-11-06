import { ComponentPropsWithRef, useEffect } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { Keyboard, TextInput } from 'react-native';
import {
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import {
  CellProps,
  ConfirmCodeInputParams,
  GetCellOnLayoutHandler,
} from '../types';

export type UseConfirmationInputResult = ComponentPropsWithRef<
  typeof TextInput
> & {
  cellProps: CellProps;
  getCellOnLayoutHandler: GetCellOnLayoutHandler;
};

export const useConfirmationInput = <Type extends FieldValues>(
  params: ConfirmCodeInputParams<Type>,
): UseConfirmationInputResult => {
  const { cellCount, name, control } = params;

  const {
    field: { value, onChange },
  } = useController({ name, control });

  const ref = useBlurOnFulfill({
    value,
    cellCount,
  });

  const [cellProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue: onChange,
  });

  useEffect(() => {
    if (value.length === cellCount) {
      Keyboard.dismiss();
    }
  }, [cellCount, value]);

  return { cellProps, ref, getCellOnLayoutHandler };
};
