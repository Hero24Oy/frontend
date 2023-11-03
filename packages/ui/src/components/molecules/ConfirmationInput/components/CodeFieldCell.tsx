import { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Cursor } from 'react-native-confirmation-code-field';

import { GetCellOnLayoutHandler } from '../types';

import { StyledCodeFieldCell } from '$styled';
import { Color } from '$theme';

type Props = {
  getCellOnLayoutHandler: GetCellOnLayoutHandler;
  index: number;
  isFocused: boolean;
  symbol: string;
};

export const CodeFieldCell: FC<Props> = (props) => {
  const { index, symbol, getCellOnLayoutHandler, isFocused } = props;

  const children = symbol || (isFocused ? <Cursor /> : null);

  return (
    <StyledCodeFieldCell
      onLayout={getCellOnLayoutHandler(index)}
      style={isFocused && styles.cellOnFocus}
    >
      {children}
    </StyledCodeFieldCell>
  );
};

export const styles = StyleSheet.create({
  cellOnFocus: {
    borderColor: Color.BLACK_00,
  },
});
