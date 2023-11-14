import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, Color, Heading, Text, VStack } from '@hero24/ui';

import { useLogic } from './useLogic';

export const ResetPasswordCheckEmail: FC = () => {
  const { message, sendOneMoreTime } = useLogic({});

  return (
    <VStack style={styles.wrapper}>
      {/* TODO replace with i18n call */}
      <Heading variant="H2">Check your email</Heading>
      <Text variant="regular" style={styles.text}>
        {message}
      </Text>
      <VStack style={styles.button}>
        {/* TODO replace with i18n call */}
        <Button onPress={sendOneMoreTime} variant="solid" action="primary">
          Send one more time
        </Button>
      </VStack>
    </VStack>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginBottom: 24,
    marginTop: 24,
    gap: 12,
  },
  button: {
    marginTop: 12,
  },
  text: {
    color: Color.BLACK_00,
  },
});
