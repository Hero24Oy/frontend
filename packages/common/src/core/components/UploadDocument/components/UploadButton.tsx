import { FC } from 'react';
import { FieldError } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { Button, InputHelper, UploadIcon, VStack } from '@hero24/ui';

type Props = {
  error?: FieldError;
  onPress?: () => void;
};

export const UploadButton: FC<Props> = (props) => {
  const { error, onPress } = props;

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
      <InputHelper error={error} />
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
});
