import { yupResolver } from '@hookform/resolvers/yup';
import { resetPasswordFormValidationSchema } from 'core/validation';
import { useCustomForm, useFieldValidation } from 'modules/Auth/hooks';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, Input, VStack } from '@hero24/ui';

interface FormData {
  email: string;
}

export type ResetPasswordFormProps = {
  onSuccessResetPasswordCallback: () => void;
};

export const ResetPasswordForm: FC<ResetPasswordFormProps> = (props) => {
  const { onSuccessResetPasswordCallback } = props;

  const onSubmit = (_data: FormData): void => {
    onSuccessResetPasswordCallback();
  };

  const { control, onSubmitHandler, isLoading } = useCustomForm<FormData>({
    resolver: yupResolver(resetPasswordFormValidationSchema),
    defaultValues: { email: '' },
    mode: 'onChange',
    onSubmit,
  });

  const isEmailValid = useFieldValidation({ control, name: 'email' });

  return (
    <VStack style={styles.wrapper}>
      {/* TODO replace with i18n call */}
      <Input
        placeholder="Enter"
        control={control}
        name="email"
        title="Email"
        keyboardType="email-address"
        isHelperDisabled
      />
      <Button
        onPress={onSubmitHandler}
        isDisabled={!isEmailValid}
        isLoading={isLoading}
      >
        Reset password
      </Button>
    </VStack>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    gap: 24,
  },
});
