import React, { ReactElement } from 'react';
import { FieldValues } from 'react-hook-form';

import { Input } from '../Input';

import { SelectCountry } from './components/SelectCountry';
import { PhoneInputProps } from './types';

const DEFAULT_PHONE_MASK = '999 999 9999';

/**
 * Description
 * @param {PhoneInputProps<Type>['control']} props.control
 * control from useForm hook
 * @param {PhoneInputProps<Type>['name']} props.phoneFieldName
 * Name of useForm field for phone number value
 * @param {PhoneInputProps<Type>['name']} props.codeFieldName
 * Name of useForm field for country calling code value
 * @param {PhoneInputProps<Type>['initialCountryCode']} props.initialCountryCode
 * Country code that will be used for country selector on component first render
 * @returns {ReactElement}
 */

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
