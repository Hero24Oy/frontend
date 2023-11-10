import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, ConfirmationInput, VStack } from '@hero24/ui';

import { SendOneMoreTime } from './components';
import { CODE_LENGTH } from './constants';
import { useLogic } from './useLogic';

export const ConfirmationCodeForm: FC = () => {
  const {
    control,
    onSubmitHandler,
    isLoading,
    isValid,
    onSendOneMoreTimeHandler,
    debounceTime,
  } = useLogic();

  return (
    <VStack style={styles.wrapper}>
      {/* TODO replace with i18n call */}
      <VStack>
        <ConfirmationInput
          control={control}
          name="code"
          cellCount={CODE_LENGTH}
        />

        <SendOneMoreTime
          debounceTime={debounceTime}
          onPress={onSendOneMoreTimeHandler}
        />
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
});

export * from './types';
