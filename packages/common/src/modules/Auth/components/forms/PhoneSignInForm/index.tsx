// import { PhoneInput } from '@hero24/ui-library/src/components/atoms/PhoneInput';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { CountryCode } from 'react-native-country-picker-modal';

import { Button, PhoneInput } from '@hero24/ui';

import { phoneSignInFormValidationSchema } from '$common/core';

const preferredCountryCodes: CountryCode[] = ['FI', 'DO'];
const INITIAL_COUNTRY_CODE: CountryCode = 'FI';

interface FormData {
  phone: string;
  callingCode?: string;
}

export const PhoneSignInForm: FC = () => {
  const { control, handleSubmit, setValue } = useForm<FormData>({
    resolver: yupResolver(phoneSignInFormValidationSchema),
    defaultValues: {
      phone: '',
      callingCode: '',
    },
    mode: 'onSubmit',
  });

  const onSubmit = (): void => {
    void handleSubmit((_data: FormData): void => {
      return undefined;
    })();
  };

  return (
    <>
      {/* TODO replace button label and placeholders with i18n call */}
      <PhoneInput
        placeholder="Phone number"
        control={control}
        name="phone"
        callingCodeName="callingCode"
        setValue={setValue}
        preferredCountryCodes={preferredCountryCodes}
        initialCountryCode={INITIAL_COUNTRY_CODE}
      />
      <Button onPress={onSubmit}>Continue</Button>
    </>
  );
};
