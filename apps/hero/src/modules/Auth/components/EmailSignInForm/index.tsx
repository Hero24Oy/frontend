import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Input, VStack } from '@hero24/ui';
import { emailSignInFormValidationSchema } from '$/core/validation'; // TODO move here
import { StyleSheet } from 'react-native';

interface FormData {
  email: string;
  password: string;
}

export const EmailSignInForm: FC = () => {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(emailSignInFormValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (): void => {
    void handleSubmit((_data: FormData): void => {
      return undefined;
    })();
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
