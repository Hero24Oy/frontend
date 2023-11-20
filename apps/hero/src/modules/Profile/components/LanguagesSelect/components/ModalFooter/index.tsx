import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button } from '@hero24/ui';

type Props = {
  onClose: () => void;
};

export const ModalFooter: FC<Props> = (props) => {
  const { onClose } = props;

  return (
    <Button onPress={onClose} style={styles.button}>
      Apply
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
  },
});
