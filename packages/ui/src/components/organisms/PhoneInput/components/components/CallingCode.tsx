import { FC } from 'react';

import { SelectCallingCode } from './components';
import { CallingCodeProps } from './types';

import { Text } from '$atoms';

export const CallingCode: FC<CallingCodeProps> = (props) => {
  const { country, value } = props;

  if (!country) {
    return null;
  }

  if (country.callingCode.length <= 1) {
    return <Text>{value}</Text>;
  }

  return <SelectCallingCode {...props} />;
};
