import { FC, useMemo } from 'react';
import { Cursor } from 'react-native-confirmation-code-field';
import { StyledCodeFieldCell } from 'styled/ConfirmationInput/CodeFieldCell';

import { GetCellOnLayoutHandler } from '../types';

type Props = {
  getCellOnLayoutHandler: GetCellOnLayoutHandler;
  index: number;
  isFocused: boolean;
  symbol: string;
};

export const CodeFieldCell: FC<Props> = (props) => {
  const { index, symbol, getCellOnLayoutHandler, ...restProps } = props;

  const text = useMemo(
    () => symbol || (restProps.isFocused ? <Cursor /> : null),
    [symbol, restProps.isFocused],
  );

  return (
    <StyledCodeFieldCell
      key={index}
      onLayout={getCellOnLayoutHandler(index)}
      {...restProps}
    >
      {text}
    </StyledCodeFieldCell>
  );
};
