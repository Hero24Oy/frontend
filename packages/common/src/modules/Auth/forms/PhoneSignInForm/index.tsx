import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, PhoneInput, VStack } from '@hero24/ui';

import { PHONE_INITIAL_COUNTRY_CODE, PREFERRED_COUNTRIES } from './constants';
import { PhoneSignInFormProps } from './types';
import { useLogic } from './useLogic';

export const PhoneSignInForm: FC<PhoneSignInFormProps> = (props) => {
  const { control, onSubmitHandler, isLoading, isPhoneValid } = useLogic(props);

  return (
    <VStack style={styles.wrapper}>
      {/* TODO replace with i18n call */}
      <PhoneInput
        control={control}
        codeFieldName="code"
        phoneFieldName="phone"
        initialCountryCode={PHONE_INITIAL_COUNTRY_CODE}
        preferredCountryCodes={PREFERRED_COUNTRIES}
        title="Phone number"
        placeholder="Enter"
      />
      <Button
        variant="solid"
        size="md"
        action="primary"
        onPress={onSubmitHandler}
        isDisabled={!isPhoneValid}
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
