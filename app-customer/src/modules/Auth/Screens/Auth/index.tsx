import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';

import { styles } from './styles';

import {
  Button,
  ButtonText,
  HStack,
  Input,
  InputField,
  Text,
  Toast,
  useToast,
  VStack,
} from '$ui-library';

export const AuthScreen: FC = () => {
  const toast = useToast();

  const showToast = (description?: string, title?: string): void => {
    toast.show({
      placement: 'top',
      duration: 2500,
      render() {
        return (
          <Toast
            title={title}
            description={description}
            action="error"
            variant="accent"
          />
        );
      },
    });
  };

  const continueWithGoogleOnPress = (): void =>
    showToast('Login with Google is under construction');

  const continueWithFacebookOnPress = (): void =>
    showToast('Login with Facebook is under construction');

  const continueWithAppleOnPress = (): void =>
    showToast('Login with Apple is under construction');

  const continueOnPressHandler = (): void => {
    console.warn('Continue pressed');
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <VStack style={styles.container} space="md">
        <Input isDisabled={false} isInvalid={false} isReadOnly={false}>
          <InputField placeholder="Email" />
        </Input>
        <Input isDisabled={false} isInvalid={false} isReadOnly={false}>
          <InputField placeholder="Password" type="password" />
        </Input>
        <Button
          variant="solid"
          style={styles.continueButton}
          onPress={continueOnPressHandler}
        >
          <ButtonText size="md">Continue</ButtonText>
        </Button>
        <HStack height={64} alignItems="center" justifyContent="center">
          <Text>Or</Text>
        </HStack>
        <Button variant="outline" onPress={continueWithGoogleOnPress}>
          <ButtonText size="md">Continue with Google</ButtonText>
        </Button>
        <Button variant="outline" onPress={continueWithFacebookOnPress}>
          <ButtonText size="md">Continue with Facebook</ButtonText>
        </Button>
        <Button variant="outline" onPress={continueWithAppleOnPress}>
          <ButtonText size="md">Continue with Apple</ButtonText>
        </Button>
      </VStack>
    </SafeAreaView>
  );
};
