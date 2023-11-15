import { ReactElement } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import {
  CodeField,
  RenderCellOptions,
} from 'react-native-confirmation-code-field';

import { CodeFieldCell } from './components';
import { useConfirmationInput } from './hooks';
import { ConfirmCodeInputParams } from './types';

export const ConfirmationInput = <Type extends FieldValues>(
  props: ConfirmCodeInputParams<Type>,
): ReactElement => {
  const { cellCount, name, control } = props;

  const { cellProps, ref, getCellOnLayoutHandler } =
    useConfirmationInput(props);

  const renderCell = (renderOptions: RenderCellOptions): JSX.Element => (
    <CodeFieldCell
      key={renderOptions.index}
      getCellOnLayoutHandler={getCellOnLayoutHandler}
      {...renderOptions}
    />
  );

  const {
    field: { value, onChange },
  } = useController({ name, control });

  return (
    <CodeField
      autoFocus
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      ref={ref}
      value={value}
      onChangeText={onChange}
      cellCount={cellCount}
      rootStyle={styles.root}
      renderCell={renderCell}
      {...cellProps}
    />
  );
};

const styles = StyleSheet.create({
  root: {
    gap: 8,
    justifyContent: 'center',
  },
});
