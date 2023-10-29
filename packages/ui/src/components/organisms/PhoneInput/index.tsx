import { Spinner } from '@gluestack-ui/themed';
import { ReactElement, useMemo } from 'react';
import { FieldValues } from 'react-hook-form';

import { Input } from '$molecules';

import { SelectCountry } from './components';
import { useSelectCountry } from './components/hooks';
import { PhoneInputProps } from './types';

const DEFAULT_PHONE_MASK = '999 999 9999';

export const PhoneInput = <Type extends FieldValues>(
  props: PhoneInputProps<Type>,
): ReactElement => {
  const { control, phoneFieldName, placeholder, isDisabled } = props;

  const { isLoading, selectCountryProps } = useSelectCountry(props);

  const leftSlotContent = useMemo(
    () =>
      isLoading ? (
        <Spinner size="small" />
      ) : (
        <SelectCountry {...selectCountryProps} />
      ),
    [selectCountryProps, isLoading],
  );

  return (
    <Input
      keyboardType="phone-pad"
      control={control}
      name={phoneFieldName}
      placeholder={placeholder}
      isDisabled={isDisabled || isLoading}
      mask={DEFAULT_PHONE_MASK}
      leftSlot={leftSlotContent}
    />
  );
};