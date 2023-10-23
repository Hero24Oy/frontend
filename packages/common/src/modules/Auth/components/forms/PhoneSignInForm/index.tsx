import React, { FC } from 'react';
import { CountryCode } from 'react-native-country-picker-modal';

import { Button, PhoneInput } from '@hero24/ui';

import { usePhoneSignInForm } from './hooks/usePhoneSignInForm';

const preferredCountryCodes: CountryCode[] = ['FI'];
const INITIAL_COUNTRY_CODE: CountryCode = 'FI';

export const PhoneSignInForm: FC = () => {
  const { control, setValue, onSubmit } = usePhoneSignInForm();

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
