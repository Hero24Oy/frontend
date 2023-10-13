import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import { EmailSignInForm, SignInProvidersButtons } from './components';

import { HStack, SafeAreaView, Text, VStack } from '$ui-library';

export const AuthScreen: FC = () => {
  return (
    <SafeAreaView>
      <VStack style={styles.container}>
        <EmailSignInForm />
        <HStack style={styles.orBox}>
          {/* TODO replace "Or" with i18n call */}
          <Text>Or</Text>
        </HStack>
        <SignInProvidersButtons />
      </VStack>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 16,
  },
  orBox: {
    paddingVertical: 32,
    justifyContent: 'center',
  },
});
