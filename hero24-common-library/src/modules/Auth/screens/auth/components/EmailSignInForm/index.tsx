import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import * as yup from 'yup';

import {
  emailValidationShape,
  passwordValidationShape,
} from '../../../../../../core';

import { Button, Input, VStack } from '$ui-library';

interface FormData {
  email: string;
  password: string;
}

const formValidation = yup.object().shape({
  email: emailValidationShape,
  password: passwordValidationShape,
});

export const EmailSignInForm: FC = () => {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(formValidation),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmitHandler = (_data: FormData): void => {
    return undefined;
  };

  const onSubmit = (): void => {
    void handleSubmit(onSubmitHandler)();
  };

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
      <Button onPress={onSubmit}>Continue</Button>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    gap: 16,
  },
});
