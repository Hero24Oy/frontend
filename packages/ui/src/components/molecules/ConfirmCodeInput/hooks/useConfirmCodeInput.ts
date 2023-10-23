import { RefObject, useEffect, useState } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import {
  GestureResponderEvent,
  Keyboard,
  LayoutChangeEvent,
  TextInput,
} from 'react-native';
import {
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

type CellProps = {
  onPressOut: (event: GestureResponderEvent) => void;
};

export interface Props<Type extends FieldValues> {
  cellCount: number;
  control: Control<Type>;
  name: Path<Type>;
}

interface ReturnType {
  cellProps: CellProps;
  getCellOnLayoutHandler: (index: number) => (event: LayoutChangeEvent) => void;
  onChangeText: (newValue: string) => void;
  ref: RefObject<TextInput>;
  value: string;
}

export const useConfirmCodeInput = <Type extends FieldValues>(
  props: Props<Type>,
): ReturnType => {
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

  const onChangeText = (newValue: string): void => {
    setCode(newValue);
  };

  useEffect(() => {
    if (code.length === cellCount) {
      Keyboard.dismiss();
    }

    onChange(code);
  }, [cellCount, code, onChange, value]);

  return { cellProps, onChangeText, ref, getCellOnLayoutHandler, value: code };
};
