import { ReactElement } from 'react';
import { FieldValues } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import {
  CodeField,
  RenderCellOptions,
} from 'react-native-confirmation-code-field';

import { CodeFieldCell } from './components/CodeFieldCell';
import { useConfirmationInput } from './hooks/useConfirmationInput';
import { ConfirmCodeInputProps } from './types';

export const ConfirmationInput = <Type extends FieldValues>(
  props: ConfirmCodeInputProps<Type>,
): ReactElement => {
  const { cellCount } = props;

  const { cellProps, onChangeText, ref, getCellOnLayoutHandler, value } =
    useConfirmationInput(props);

  const renderCell = (renderOptions: RenderCellOptions): JSX.Element => (
    <CodeFieldCell
      key={renderOptions.index}
      getCellOnLayoutHandler={getCellOnLayoutHandler}
      {...renderOptions}
    />
  );

  return (
    <CodeField
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      ref={ref}
      value={value}
      onChangeText={onChangeText}
      cellCount={cellCount}
      rootStyle={styles.root}
      renderCell={renderCell}
      {...cellProps}
    />
  );
};

export const styles = StyleSheet.create({
  root: {
    gap: 8,
    justifyContent: 'center',
  },
});