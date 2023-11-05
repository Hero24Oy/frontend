import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Text, VStack } from '@hero24/ui';

type Props = {
  phone: string;
};

export const ConfirmationCodeFormText: FC<Props> = ({ phone }) => {
  return (
    <VStack style={styles.textContainer}>
      {/* TODO replace with i18n call */}
      <Text variant="regular" color="BLACK_00">
        The code was sent to
      </Text>
      <Text variant="medium" color="BLACK_00">
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
});
