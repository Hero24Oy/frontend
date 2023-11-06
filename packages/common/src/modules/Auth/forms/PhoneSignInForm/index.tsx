import { yupResolver } from '@hookform/resolvers/yup';
import { phoneSignInFormValidationSchema } from 'core/validation';
import { useCustomForm, useFieldValidation } from 'modules/Auth/hooks';
import { FC } from 'react';
import { StyleSheet } from 'react-native';
import { CountryCode } from 'react-native-country-picker-modal';

import { Button, PhoneInput, VStack } from '@hero24/ui';

type FormData = {
  phone: string;
  code?: string;
};

export type PhoneSignInFormProps = {
  signInWithPhoneCallback: () => void;
};

const PHONE_INITIAL_COUNTRY_CODE: CountryCode = 'FI';

export const PhoneSignInForm: FC<PhoneSignInFormProps> = (props) => {
  const { signInWithPhoneCallback } = props;

  const onSubmit = (_data: FormData): void => {
    signInWithPhoneCallback();
  };

  const { control, onSubmitHandler, isLoading } = useCustomForm<FormData>({
    resolver: yupResolver(phoneSignInFormValidationSchema),
    defaultValues: { phone: '', code: '' },
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
