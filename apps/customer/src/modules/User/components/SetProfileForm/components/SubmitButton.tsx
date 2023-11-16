import { FC } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button, GluestackButtonProps } from '@hero24/ui';

type SubmitButtonProps = {
  isLoading: boolean;
} & Pick<GluestackButtonProps, 'onPress' | 'isDisabled'>;

export const SubmitButton: FC<SubmitButtonProps> = (props) => {
  const { isLoading, isDisabled, onPress } = props;
  const { bottom } = useSafeAreaInsets();

  return (
    <Button
      isLoading={isLoading}
      isDisabled={isLoading || isDisabled}
      onPress={onPress}
      style={{ marginBottom: bottom }}
    >
      Continue
    </Button>
  );
};
