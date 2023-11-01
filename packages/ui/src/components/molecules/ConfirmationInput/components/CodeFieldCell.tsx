import { FC } from 'react';
import { Cursor } from 'react-native-confirmation-code-field';

import { styles } from '../styles';
import { GetCellOnLayoutHandler } from '../types';

import { StyledCodeFieldCell } from '$styled';

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
