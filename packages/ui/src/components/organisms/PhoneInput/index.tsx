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
  const { isDisabled, phoneFieldName, ...restProps } = props;

  const { isLoading, selectCountryProps } = useSelectCountry(props);

  const leftSlotContent = isLoading ? (
    <Spinner size="small" />
  ) : (
    <SelectCountry {...selectCountryProps} />
  );

  return (
    <Input
      keyboardType="phone-pad"
      isDisabled={isDisabled || isLoading}
      mask={DEFAULT_PHONE_MASK}
      name={phoneFieldName}
      leftSlot={leftSlotContent}
      isHelperDisabled
      {...restProps}
    />
  );
};
