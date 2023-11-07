import { yupResolver } from '@hookform/resolvers/yup';
import { resetPasswordFormValidationSchema } from 'core';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, Input, VStack } from '@hero24/ui';

import { initialFormState } from './constants';
import { ResetPasswordFormData, ResetPasswordFormProps } from './types';

import { useCustomForm, useFieldValidation } from '$common/modules/Auth/hooks';

export const ResetPasswordForm: FC<ResetPasswordFormProps> = (props) => {
  const { onSuccessResetPasswordCallback } = props;

  const onSubmit = (_data: ResetPasswordFormData): void => {
    onSuccessResetPasswordCallback();
  };

  const { control, onSubmitHandler, isLoading } =
    useCustomForm<ResetPasswordFormData>({
      resolver: yupResolver(resetPasswordFormValidationSchema),
      defaultValues: initialFormState,
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

export * from './types';
