import { Text } from 'components';
import React, { FC } from 'react';

import { SelectCallingCode } from './components/SelectCallingCode';
import { CallingCodeProps } from './types';

export const CallingCode: FC<CallingCodeProps> = (props) => {
  const { country, onCodeChange, value } = props;

  if (!country) {
    return null;
  }

  if (country.callingCode.length <= 1) {
    return <Text>{value}</Text>;
  }

  return (
    <SelectCallingCode
      country={country}
      onCodeChange={onCodeChange}
      value={value}
    />
  );
};
