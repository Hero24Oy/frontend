import { Spinner } from '@gluestack-ui/themed';
import { ReactElement } from 'react';
import { FieldValues } from 'react-hook-form';

import { SelectCountry } from './components';
import { useSelectCountry } from './hooks';
import { PhoneInputProps } from './types';

import { Input } from '$molecules';

const DEFAULT_PHONE_MASK = '999 999 9999';

export const PhoneInput = <Type extends FieldValues>(
  props: PhoneInputProps<Type>,
): ReactElement => {
  const { control, phoneFieldName, placeholder, isDisabled } = props;

  const { isLoading, selectCountryProps } = useSelectCountry(props);

  const leftSlotContent = isLoading ? (
    <Spinner size="small" />
  ) : (
    <SelectCountry {...selectCountryProps} />
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
