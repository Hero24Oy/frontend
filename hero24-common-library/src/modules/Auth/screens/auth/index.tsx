import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import { HStack, SafeAreaView, Text, VStack } from '$ui-library';
import { ContinueWithButtons, EmailSignInForm } from './components';

export const AuthScreen: FC = () => {
  return (
    <SafeAreaView>
      <VStack style={styles.container}>
        <EmailSignInForm />
        <HStack style={styles.orBox}>
          {/* TODO replace "Or" with i18n call */}
          <Text>Or</Text>
        </HStack>
        <ContinueWithButtons />
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
