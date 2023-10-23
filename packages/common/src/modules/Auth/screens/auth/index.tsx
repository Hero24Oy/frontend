import {
  AppleAuth,
  EmailAuth,
  FacebookAuth,
  GoogleAuth,
} from 'modules/Auth/components';
import { PhoneSignInForm } from 'modules/Auth/components/forms/PhoneSignInForm';
import { AuthConfig } from 'modules/Auth/types';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import { KeyboardAwareScrollView, VStack } from '@hero24/ui';

interface Props {
  authConfig: AuthConfig;
}

export const AuthScreen: FC<Props> = (props) => {
  const { authConfig } = props;

  return (
    <KeyboardAwareScrollView>
      <VStack style={styles.container}>
        <EmailAuth />
        <PhoneSignInForm />
        <FacebookAuth authConfig={authConfig} />
        <GoogleAuth authConfig={authConfig} />
        <AppleAuth />
      </VStack>
    </KeyboardAwareScrollView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 16,
  },
});
