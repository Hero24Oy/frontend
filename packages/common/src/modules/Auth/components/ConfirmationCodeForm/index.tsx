import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, Color, ConfirmationInput, VStack } from '@hero24/ui';

import { SendOneMoreTime } from './components';
import { CODE_LENGTH } from './constants';
import { useLogic } from './hooks';

export { RecaptchaModal, TimerProvider } from './components';

export const ConfirmationCodeForm: FC = () => {
  const {
    control,
    isLoading,
    isValid,
    onSubmitHandler,
    onSendOneMoreTimeHandler,
  } = useLogic();

  // TODO error handling will be deal with when design is ready
  return (
    <VStack style={styles.wrapper}>
      {/* TODO replace with i18n call */}
      <VStack style={styles.centered}>
        <ConfirmationInput
          control={control}
          name="code"
          cellCount={CODE_LENGTH}
        />
        <SendOneMoreTime onPress={onSendOneMoreTimeHandler} />
      </VStack>
      <Button
        onPress={onSubmitHandler}
        isDisabled={!isValid}
        isLoading={isLoading}
      >
        Continue
      </Button>
    </VStack>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  centered: {
    alignItems: 'center',
  },
  errorText: {
    color: Color.RED_00,
  },
});
