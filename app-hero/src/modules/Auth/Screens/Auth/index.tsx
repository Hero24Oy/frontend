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
  VStack,
} from '$ui-library';

export const AuthScreen: FC = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <VStack style={styles.container} space="md">
        <Input isDisabled={false} isInvalid={false} isReadOnly={false}>
          <InputField placeholder="Email" />
        </Input>
        <Input isDisabled={false} isInvalid={false} isReadOnly={false}>
          <InputField placeholder="Password" type="password" />
        </Input>
        <Button>Continue</Button>
        <HStack height={64} alignItems="center" justifyContent="center">
          <Text>Or</Text>
        </HStack>
        {/* <Button variant="outline" disabled>
          <ButtonText size="md">Continue with Google</ButtonText>
        </Button>
        <Button variant="outline" disabled>
          <ButtonText size="md">Continue with Facebook</ButtonText>
        </Button>
        <Button variant="outline" disabled>
          <ButtonText size="md">Continue with Apple</ButtonText>
        </Button> */}
      </VStack>
    </SafeAreaView>
  );
};
