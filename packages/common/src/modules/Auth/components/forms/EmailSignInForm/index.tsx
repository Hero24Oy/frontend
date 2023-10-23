import React, { FC } from 'react';

import { Button, Input } from '@hero24/ui';

import { useEmailSignInForm } from './hooks/useEmailSignInForm';

export const EmailSignInForm: FC = () => {
  const { control, signInHandler } = useEmailSignInForm();

  return (
    <>
      {/* TODO replace button label and placeholders with i18n call */}
      <Input
        placeholder="Email"
        control={control}
        name="email"
        keyboardType="email-address"
      />
      <Input
        placeholder="Password"
        type="password"
        control={control}
        name="password"
      />
      <Button onPress={signInHandler}>Sign in</Button>
    </>
  );
};
