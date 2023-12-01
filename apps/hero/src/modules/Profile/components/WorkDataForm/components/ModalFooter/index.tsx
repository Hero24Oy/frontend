import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button } from '@hero24/ui';

type Props = {
  isValid: boolean;
  onClose: () => void;
  title: string;
};

export const ModalFooter: FC<Props> = (props) => {
  const { onClose, title, isValid } = props;

  return (
    <Button onPress={onClose} style={styles.button} isDisabled={!isValid}>
      {title}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
  },
});
