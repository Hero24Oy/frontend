import { HStack } from 'components/atoms';
import React, { ReactElement } from 'react';
import { FieldValues } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import CountryPicker, { CountryCode } from 'react-native-country-picker-modal';

import { PhoneInputProps } from '../types';

import { CallingCode } from './components/CallingCode';
import { useSelectCountry } from './hooks/useSelectCountry';

export const SelectCountry = <Type extends FieldValues>(
  props: PhoneInputProps<Type>,
): ReactElement => {
  const { preferredCountryCodes } = props;

  const {
    onCountrySelect,
    selectedCountry,
    onCallingCodeChange,
    callingCodeValue,
  } = useSelectCountry(props);

  return (
    <HStack style={styles.stack}>
      <CountryPicker
        countryCode={selectedCountry?.cca2 as CountryCode}
        preferredCountries={preferredCountryCodes}
        onSelect={onCountrySelect}
        withCallingCode
      />
      <CallingCode
        country={selectedCountry}
        onCodeChange={onCallingCodeChange}
        value={callingCodeValue}
      />
    </HStack>
  );
};

const styles = StyleSheet.create({
  stack: {
    alignItems: 'center',
  },
});
