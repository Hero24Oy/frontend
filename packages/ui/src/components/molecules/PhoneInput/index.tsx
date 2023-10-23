import { HStack } from 'components/atoms';
import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { FieldValues, Path, PathValue, UseFormSetValue } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import CountryPicker, {
  Country,
  CountryCode,
} from 'react-native-country-picker-modal';

import { Input, InputProps } from '../Input';

import { CallingCode } from './components/CallingCode';
import { DEFAULT_PHONE_MASK } from './constants';
import { getInitialCountry } from './helpers/getInitialCountry';

type InputPropsOmit =
  | 'leftSlot'
  | 'rightSlot'
  | 'mask'
  | 'type'
  | 'keyboardType';

interface Props<Type extends FieldValues>
  extends Omit<InputProps<Type>, InputPropsOmit> {
  callingCodeName: Path<Type>;
  initialCountryCode: CountryCode;
  setValue: UseFormSetValue<Type>;
  preferredCountryCodes?: CountryCode[];
}

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
 * Country code that will be used for country selector
 * @returns {ReactElement}
 */

export const PhoneInput = <Type extends FieldValues>(
  props: Props<Type>,
): ReactElement => {
  const {
    control,
    name,
    isDisabled = false,
    placeholder,
    callingCodeName,
    setValue,
    preferredCountryCodes,
    initialCountryCode,
  } = props;

  const [countryCode, setCountryCode] =
    useState<CountryCode>(initialCountryCode);

  const [selectedCountry, setSelectedCountry] = useState<Country | null>();

  const initCountry = useCallback(async (): Promise<void> => {
    const initialCountry = await getInitialCountry(initialCountryCode);

    setSelectedCountry(initialCountry);
  }, [initialCountryCode]);

  useEffect(() => {
    void initCountry();
  }, [initCountry, initialCountryCode]);

  const onCountrySelect = (newCountry: Country): void => {
    setCountryCode(newCountry.cca2);
    setSelectedCountry(newCountry);
  };

  const onCallingCodeChange = useCallback(
    (callingCode: string): void => {
      setValue(callingCodeName, callingCode as PathValue<Type, Path<Type>>);
    },
    [callingCodeName, setValue],
  );

  return (
    <Input
      control={control}
      name={name}
      placeholder={placeholder}
      isDisabled={isDisabled}
      mask={DEFAULT_PHONE_MASK}
      keyboardType="phone-pad"
      leftSlot={
        <HStack style={styles.stack}>
          <CountryPicker
            countryCode={countryCode}
            preferredCountries={preferredCountryCodes}
            excludeCountries={['AQ']}
            onSelect={onCountrySelect}
            withCallingCode
          />
          <CallingCode
            country={selectedCountry}
            onCodeChange={onCallingCodeChange}
          />
        </HStack>
      }
    />
  );
};

const styles = StyleSheet.create({
  stack: {
    alignItems: 'center',
  },
});
