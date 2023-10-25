import { useCallback, useEffect, useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { Country } from 'react-native-country-picker-modal';
import { Maybe } from 'types';

import { PhoneInputProps } from '../../types';
import { codeWithPrefix, getInitialCountry } from '../helpers';

interface ReturnType {
  onCodeSelect: (code: string) => void;
  onCountrySelect: (country: Country) => void;
  selectedCode: string;
  selectedCountry?: Maybe<Country>;
}

export const useSelectCountry = <Type extends FieldValues>(
  props: PhoneInputProps<Type>,
): ReturnType => {
  const { control, codeFieldName, initialCountryCode } = props;

  const [selectedCountry, setSelectedCountry] = useState<Country | null>();

  const {
    field: { value, onChange },
  } = useController({ name: codeFieldName, control });

  const initCountry = useCallback(async (): Promise<void> => {
    const initialCountry = await getInitialCountry(initialCountryCode);

    setSelectedCountry(initialCountry);
  }, [initialCountryCode]);

  const onCountrySelect = useCallback(
    (newCountry: Country): void => {
      setSelectedCountry(newCountry);
    },
    [setSelectedCountry],
  );

  useEffect(() => {
    onChange(codeWithPrefix(selectedCountry?.callingCode[0]));
  }, [selectedCountry]);

  useEffect(() => {
    void initCountry();
  }, [initCountry, initialCountryCode]);

  const onCodeSelect = useCallback(
    (callingCode: string): void => {
      onChange(codeWithPrefix(callingCode));
    },
    [onChange],
  );

  return {
    onCountrySelect,
    selectedCountry,
    onCodeSelect,
    selectedCode: value,
  };
};
