import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Color, Text, VStack } from '@hero24/ui';

type Props = {
  phone: string;
};

export const ConfirmationCodeScreenText: FC<Props> = ({ phone }) => {
  return (
    <VStack style={styles.textContainer}>
      {/* TODO replace with i18n call */}
      <Text variant="regular" style={styles.text}>
        The code was sent to
      </Text>
      <Text variant="medium" style={styles.text}>
        {phone}
      </Text>
    </VStack>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginBottom: 24,
    marginTop: 32,
    alignItems: 'center',
  },
  text: {
    color: Color.BLACK_00,
  },
});
