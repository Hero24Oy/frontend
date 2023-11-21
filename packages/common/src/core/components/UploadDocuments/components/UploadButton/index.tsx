import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, Color, Text, UploadIcon, VStack } from '@hero24/ui';

type Props = {
  isRequired: boolean | undefined;
  onPress?: () => void;
};

export const UploadedButton: FC<Props> = (props) => {
  const { isRequired, onPress } = props;

  return (
    <VStack style={styles.container}>
      <Button
        onPress={onPress}
        size="lg"
        variant="outline"
        action="secondary"
        icon={UploadIcon}
      >
        Upload
      </Button>
      {isRequired && (
        <Text style={styles.error} variant="small">
          Is required
        </Text>
      )}
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  error: {
    color: Color.GREY_01,
    fontWeight: '400',
  },
});
