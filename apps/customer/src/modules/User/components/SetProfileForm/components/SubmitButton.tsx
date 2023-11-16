import { FC } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button, GluestackButtonProps } from '@hero24/ui';

type SubmitButtonProps = {
  isLoading: boolean;
} & Pick<GluestackButtonProps, 'onPress' | 'isDisabled'>;

export const SubmitButton: FC<SubmitButtonProps> = (props) => {
  const { isLoading, isDisabled, onPress } = props;
  const styles = useStyles();

  return (
    <Button
      isLoading={isLoading}
      isDisabled={isLoading || isDisabled}
      onPress={onPress}
      style={styles.button}
    >
      Continue
    </Button>
  );
};

export const useStyles = () => {
  const { bottom } = useSafeAreaInsets();

  return StyleSheet.create({
    button: {
      marginBottom: bottom,
    },
  });
};
