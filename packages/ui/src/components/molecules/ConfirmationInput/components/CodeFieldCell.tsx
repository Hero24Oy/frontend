import { Text } from '@gluestack-ui/themed';
import React, { FC, useMemo } from 'react';
import { Cursor } from 'react-native-confirmation-code-field';

import { styles } from '../styles';
import { GetCellOnLayoutHandler } from '../types';

type Props = {
  getCellOnLayoutHandler: GetCellOnLayoutHandler;
  index: number;
  isFocused: boolean;
  symbol: string;
};

export const CodeFieldCell: FC<Props> = (props) => {
  const { index, symbol, isFocused, getCellOnLayoutHandler } = props;

  const text = useMemo(
    () => symbol || (isFocused ? <Cursor /> : null),
    [symbol, isFocused],
  );

  return (
    <Text
      key={index}
      style={[styles.cell, isFocused && styles.focusCell]}
      onLayout={getCellOnLayoutHandler(index)}
    >
      {text}
    </Text>
  );
};
