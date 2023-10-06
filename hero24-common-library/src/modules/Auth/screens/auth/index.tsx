import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import { EmailPasswordForm, SignWithButtons } from '../../components';

import { HStack, SafeAreaView, Text, VStack } from '$ui-library';

export const AuthScreen: FC = () => {
  return (
    <SafeAreaView>
      <VStack style={styles.container}>
        <EmailPasswordForm />
        <HStack style={styles.orBox}>
          <Text>Or</Text>
        </HStack>
        <SignWithButtons />
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
