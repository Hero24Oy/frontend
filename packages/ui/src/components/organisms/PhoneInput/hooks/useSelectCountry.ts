import { useCallback, useEffect, useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { Country } from 'react-native-country-picker-modal';

import { SelectCountryProps } from '../components/SelectCountry';
import { addCodePrefix, getInitialCountry } from '../helpers';
import { PhoneInputProps } from '../types';

interface ReturnType {
  isLoading: boolean;
  selectCountryProps: SelectCountryProps;
}

export const useSelectCountry = <Type extends FieldValues>(
  props: PhoneInputProps<Type>,
): ReturnType => {
  const { control, codeFieldName, initialCountryCode, preferredCountryCodes } =
    props;

  const [selectedCountry, setSelectedCountry] = useState<Country | null>();
  const [isLoading, setIsLoading] = useState(false);

  const {
    field: { value, onChange },
  } = useController({ name: codeFieldName, control });

  const initCountry = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    const initialCountry = await getInitialCountry(initialCountryCode);

    setSelectedCountry(initialCountry);
    setIsLoading(false);
  }, [initialCountryCode]);

  const onCountrySelect = useCallback(
    (newCountry: Country): void => {
      setSelectedCountry(newCountry);
    },
    [setSelectedCountry],
  );

  useEffect(() => {
    onChange(addCodePrefix(selectedCountry?.callingCode[0]));
  }, [selectedCountry]);

  useEffect(() => {
    void initCountry();
  }, [initCountry, initialCountryCode]);

  const onCodeSelect = useCallback(
    (callingCode: string): void => {
      onChange(addCodePrefix(callingCode));
    },
    [onChange],
  );

  return {
    isLoading,
    selectCountryProps: {
      onCountrySelect,
      selectedCountry,
      onCodeSelect,
      preferredCountryCodes,
      selectedCode: value,
    },
  };
};
