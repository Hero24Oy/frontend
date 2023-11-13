import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, PhoneInput, VStack } from '@hero24/ui';

import { PhoneSignInFormProps } from './types';
import { useLogic } from './useLogic';

import {
  COUNTRY_PICKER_PREFERRED_COUNTRIES,
  PHONE_NUMBER_INITIAL_COUNTRY_CODE,
} from '$configs';

export const PhoneSignInForm: FC<PhoneSignInFormProps> = (props) => {
  const { control, onSubmitHandler, isLoading, isValid } = useLogic(props);

  return (
    <VStack style={styles.wrapper}>
      {/* TODO replace with i18n call */}
      <PhoneInput
        control={control}
        codeFieldName="code"
        phoneFieldName="phone"
        initialCountryCode={PHONE_NUMBER_INITIAL_COUNTRY_CODE}
        preferredCountryCodes={COUNTRY_PICKER_PREFERRED_COUNTRIES}
        title="Phone number"
        placeholder="Enter"
      />
      <Button
        variant="solid"
        size="md"
        action="primary"
        onPress={onSubmitHandler}
        isDisabled={!isValid}
        isLoading={isLoading}
      >
        Continue
      </Button>
    </VStack>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    gap: 16,
  },
});

export * from './types';
