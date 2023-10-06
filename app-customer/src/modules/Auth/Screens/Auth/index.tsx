import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, HStack, Input, SafeAreaView, Text, VStack } from '$ui-library';

export const AuthScreen: FC = () => {
  return (
    <SafeAreaView>
      <VStack style={styles.container}>
        <Input placeholder="Email" />
        <Input placeholder="Password" type="password" />
        <Button>Continue</Button>
        <HStack style={styles.orBox}>
          <Text>Or</Text>
        </HStack>
        <Button disabled>Continue with Google</Button>
        <Button disabled>Continue with Facebook</Button>
        <Button disabled>Continue with Apple</Button>
      </VStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
    gap: 16,
  },
  orBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 32,
  },
});
