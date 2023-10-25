import React, { ReactElement } from 'react';
import { FieldValues } from 'react-hook-form';

import { SelectCountry } from './components/SelectCountry';
import { PhoneInputProps } from './types';

import { Input } from '$molecules';

const DEFAULT_PHONE_MASK = '999 999 9999';

export const PhoneInput = <Type extends FieldValues>(
  props: PhoneInputProps<Type>,
): ReactElement => {
  const { control, phoneFieldName, placeholder, isDisabled } = props;

  return (
    <Input
      control={control}
      name={phoneFieldName}
      placeholder={placeholder}
      isDisabled={isDisabled}
      mask={DEFAULT_PHONE_MASK}
      keyboardType="phone-pad"
      leftSlot={<SelectCountry {...props} />}
    />
  );
};
