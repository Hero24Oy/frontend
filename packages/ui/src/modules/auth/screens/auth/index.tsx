import React, { FC } from 'react';

// import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Button,
  ButtonText,
  HStack,
  Input,
  InputField,
  Text,
  VStack,
} from '../../../../components';

export const AuthScreen: FC = () => {
  return (
    <VStack space="md">
      <Input isDisabled={false} isInvalid={false} isReadOnly={false}>
        <InputField placeholder="Email" />
      </Input>
      <Input isDisabled={false} isInvalid={false} isReadOnly={false}>
        <InputField placeholder="Password" type="password" />
      </Input>
      <Button variant="solid" disabled>
        <ButtonText size="md">Continue</ButtonText>
      </Button>
      <HStack height={64} alignItems="center" justifyContent="center">
        <Text>Or</Text>
      </HStack>
      <Button variant="outline" disabled>
        <ButtonText size="md">Continue with Google</ButtonText>
      </Button>
      <Button variant="outline" disabled>
        <ButtonText size="md">Continue with Facebook</ButtonText>
      </Button>
      <Button variant="outline" disabled>
        <ButtonText size="md">Continue with Apple</ButtonText>
      </Button>
    </VStack>
  );
};
