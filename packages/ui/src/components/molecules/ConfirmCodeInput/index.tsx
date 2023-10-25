import { Text as GluestackText } from '@gluestack-ui/themed';
import React, { ReactElement } from 'react';
import { FieldValues } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import { CodeField, Cursor } from 'react-native-confirmation-code-field';

import { useConfirmCodeInput } from './hooks/useConfirmCodeInput';
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
      renderCell={({ index, symbol, isFocused }): JSX.Element => (
        <GluestackText
          key={index}
          style={[styles.cell, isFocused && styles.focusCell]}
          onLayout={getCellOnLayoutHandler(index)}
        >
          {symbol || (isFocused ? <Cursor /> : null)}
        </GluestackText>
      )}
    />
  );
};

const styles = StyleSheet.create({
  root: { gap: 8, justifyContent: 'center' },
  cell: {
    width: 50,
    height: 60,
    lineHeight: 55,
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#DDDDE1',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});
