import { RefObject, useCallback, useEffect, useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { Keyboard, TextInput } from 'react-native';
import {
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import {
  CellProps,
  ConfirmCodeInputProps,
  GetCellOnLayoutHandler,
  OnChangeText,
} from '../types';

export type UseConfirmationInputResult = {
  cellProps: CellProps;
  getCellOnLayoutHandler: GetCellOnLayoutHandler;
  onChangeText: OnChangeText;
  ref: RefObject<TextInput>;
  value: string;
};

export const useConfirmationInput = <Type extends FieldValues>(
  props: ConfirmCodeInputProps<Type>,
): UseConfirmationInputResult => {
  const { cellCount, name, control } = props;
  const [code, setCode] = useState('');
  const ref = useBlurOnFulfill({ value: code, cellCount });

  const [cellProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  });

  const {
    field: { value, onChange },
  } = useController({ name, control });

  const onChangeText = useCallback<OnChangeText>(
    (newValue) => setCode(newValue),
    [setCode],
  );

  useEffect(() => {
    onChange(code);
  }, [code, onChange]);

  useEffect(() => {
    if (code.length === cellCount) {
      Keyboard.dismiss();
    }
  }, [cellCount, code]);

  return { cellProps, onChangeText, ref, getCellOnLayoutHandler, value };
};
