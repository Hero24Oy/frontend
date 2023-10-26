import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import CountryPicker, {
  Country,
  CountryCode,
} from 'react-native-country-picker-modal';
import { Maybe } from 'types';

import { HStack } from '$atoms';

import { CallingCode } from './components';

export type SelectCountryProps = {
  onCodeSelect: (code: string) => void;
  onCountrySelect: (country: Country) => void;
  selectedCode: string;
  preferredCountryCodes?: CountryCode[];
  selectedCountry?: Maybe<Country>;
};

export const SelectCountry: FC<SelectCountryProps> = (props) => {
  const {
    preferredCountryCodes,
    onCodeSelect,
    onCountrySelect,
    selectedCode,
    selectedCountry,
  } = props;

  return (
    <HStack style={styles.pickerWrapper}>
      <CountryPicker
        countryCode={selectedCountry?.cca2 as CountryCode}
        preferredCountries={preferredCountryCodes}
        onSelect={onCountrySelect}
        withCallingCode
      />
      <CallingCode
        country={selectedCountry}
        onSelect={onCodeSelect}
        value={selectedCode}
      />
    </HStack>
  );
};

const styles = StyleSheet.create({
  pickerWrapper: {
    alignItems: 'center',
  },
});
