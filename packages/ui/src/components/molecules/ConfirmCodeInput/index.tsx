import React, { ReactElement } from 'react';
import { FieldValues } from 'react-hook-form';
import { CodeField } from 'react-native-confirmation-code-field';

import { CodeFieldCell } from './components/CodeFieldCell';
import { useConfirmCodeInput } from './hooks/useConfirmCodeInput';
import { styles } from './styles';
import { ConfirmCodeInputProps } from './types';

export const ConfirmCodeInput = <Type extends FieldValues>(
  props: ConfirmCodeInputProps<Type>,
): ReactElement => {
  const { cellCount } = props;

  const { cellProps, onChangeText, ref, getCellOnLayoutHandler, value } =
    useConfirmCodeInput(props);

  return (
    <CodeField
      {...cellProps}
      ref={ref}
      value={value}
      onChangeText={onChangeText}
      cellCount={cellCount}
      rootStyle={styles.root}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={(renderParams): JSX.Element => (
        <CodeFieldCell
          {...renderParams}
          key={renderParams.index}
          getCellOnLayoutHandler={getCellOnLayoutHandler}
        />
      )}
    />
  );
};
