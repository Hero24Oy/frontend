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
  onSuccessResetPasswordHandler: () => void;
};

export const ResetPasswordForm: FC<ResetPasswordFormProps> = (props) => {
  const { onSuccessResetPasswordHandler } = props;

  const onSubmit = (_data: FormData): void => {
    onSuccessResetPasswordHandler();
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
        placeholder="Email"
        control={control}
        name="email"
        title="Email"
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
