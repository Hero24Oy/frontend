import React, { ReactElement } from 'react';
import { FieldValues } from 'react-hook-form';

import { Input } from '../Input';

import { SelectCountry } from './components/SelectCountry';
import { PhoneInputProps } from './types';

export const DEFAULT_PHONE_MASK = '999 999 9999';

/**
 * Description
 * @param {Props<Type>['control']} props.control
 * control from useForm hook
 * @param {Props<Type>['setValue']} props.setValue
 * setValue function from useForm hook
 * @param {Props<Type>['name']} props.name
 * Name of useForm field that will store phone number value
 * @param {Props<Type>['name']} props.callingCodeName
 * Name of useForm field that will store country calling code value
 * @param {Props<Type>['initialCountryCode']} props.initialCountryCode
 * Country code that will be used for country selector on component first render
 * @returns {ReactElement}
 */

export const PhoneInput = <Type extends FieldValues>(
  props: PhoneInputProps<Type>,
): ReactElement => {
  const { control, name, placeholder, isDisabled } = props;

  return (
    <Input
      control={control}
      name={name}
      placeholder={placeholder}
      isDisabled={isDisabled}
      mask={DEFAULT_PHONE_MASK}
      keyboardType="phone-pad"
      leftSlot={<SelectCountry {...props} />}
    />
  );
};
