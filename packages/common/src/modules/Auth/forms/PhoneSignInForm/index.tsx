import { yupResolver } from '@hookform/resolvers/yup';
import { phoneSignInFormValidationSchema } from 'core';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, PhoneInput, VStack } from '@hero24/ui';

import {
  initialFormState,
  PHONE_INITIAL_COUNTRY_CODE,
  PREFERRED_COUNTRIES,
} from './constants';
import { PhoneSignInFormData, PhoneSignInFormProps } from './types';

import { useCustomForm, useFieldValidation } from '$common/modules/Auth/hooks';

export const PhoneSignInForm: FC<PhoneSignInFormProps> = (props) => {
  const { signInWithPhoneCallback } = props;

  const onSubmit = (_data: PhoneSignInFormData): void => {
    signInWithPhoneCallback();
  };

  const { control, onSubmitHandler, isLoading } =
    useCustomForm<PhoneSignInFormData>({
      resolver: yupResolver(phoneSignInFormValidationSchema),
      defaultValues: initialFormState,
      mode: 'onChange',
      onSubmit,
    });

  const isPhoneValid = useFieldValidation({ control, name: 'phone' });

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
