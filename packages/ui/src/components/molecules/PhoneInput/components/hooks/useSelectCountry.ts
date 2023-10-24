import { useCallback, useEffect, useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { Country } from 'react-native-country-picker-modal';

import { getInitialCountry } from '../../helpers/getInitialCountry';
import { PhoneInputProps } from '../../types';
import { codeWithPrefix } from '../helpers/codeWithPrefix';

interface ReturnType {
  callingCodeValue: string;
  onCallingCodeChange: (code: string) => void;
  onCountrySelect: (country: Country) => void;
  selectedCountry?: Country | null;
}

export const useSelectCountry = <Type extends FieldValues>(
  props: PhoneInputProps<Type>,
): ReturnType => {
  const { control, callingCodeName, initialCountryCode } = props;

  const [selectedCountry, setSelectedCountry] = useState<Country | null>();

  const {
    field: { value, onChange },
  } = useController({ name: callingCodeName, control });

  const initCountry = useCallback(async (): Promise<void> => {
    const initialCountry = await getInitialCountry(initialCountryCode);

    setSelectedCountry(initialCountry);
  }, [initialCountryCode]);

  const onCountrySelect = (newCountry: Country): void => {
    setSelectedCountry(newCountry);
  };

  useEffect(() => {
    onChange(codeWithPrefix(selectedCountry?.callingCode[0]));
  }, [selectedCountry]);

  useEffect(() => {
    void initCountry();
  }, [initCountry, initialCountryCode]);

  const onCallingCodeChange = (callingCode: string): void => {
    onChange(codeWithPrefix(callingCode));
  };

  return {
    onCountrySelect,
    selectedCountry,
    onCallingCodeChange,
    callingCodeValue: value,
  };
};
