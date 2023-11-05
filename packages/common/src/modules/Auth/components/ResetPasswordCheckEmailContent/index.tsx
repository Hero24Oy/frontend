import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, Text, VStack } from '@hero24/ui';

import { getMaskedEmail } from './utils';

type Props = {
  email: string;
};

export const ResetPasswordCheckEmailContent: FC<Props> = (props) => {
  const { email } = props;

  return (
    <VStack style={styles.wrapper}>
      {/* TODO replace with i18n call */}
      <Text variant="H2" color="BLACK_00">
        Check your email
      </Text>
      <Text variant="regular" color="BLACK_00">
        {`We sent a link to reset your password to ${getMaskedEmail(email)}`}
      </Text>
      <VStack style={styles.button}>
        <Button variant="solid" action="primary">
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
});
