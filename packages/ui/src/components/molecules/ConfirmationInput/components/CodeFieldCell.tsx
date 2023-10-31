import { FC, useMemo } from 'react';
import { Cursor } from 'react-native-confirmation-code-field';

import { GetCellOnLayoutHandler } from '../types';

import { StyledCodeFieldCell } from '$styled';

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
      onLayout={getCellOnLayoutHandler(index)}
      {...restProps}
    >
      {text}
    </StyledCodeFieldCell>
  );
};
