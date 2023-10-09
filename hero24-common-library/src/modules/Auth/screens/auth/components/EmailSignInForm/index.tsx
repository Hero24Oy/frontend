import { FC } from 'react';
import { StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Input, VStack } from '$ui-library';
import { emailValidationShape, passwordValidationShape } from '$common/core';

interface FormData {
  email: string;
  password: string;
}

const FormValidation = yup.object().shape({
  email: emailValidationShape,
  password: passwordValidationShape,
});

export const EmailSignInForm: FC = () => {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(FormValidation),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {};

  return (
    <VStack style={styles.container}>
      {/* TODO replace button label and placeholders with i18n call */}
      <Input placeholder="Email" control={control} name="email" />
      <Input
        placeholder="Password"
        type="password"
        control={control}
        name="password"
      />
      <Button onPress={handleSubmit(onSubmit)}>Continue</Button>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    gap: 16,
  },
});
