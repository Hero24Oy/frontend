import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, ConfirmationInput, Pressable, Text, VStack } from '@hero24/ui';

import { CODE_LENGTH } from './constants';
import { useLogic } from './useLogic';

export const ConfirmationCodeForm: FC = () => {
  const {
    control,
    onSubmitHandler,
    isLoading,
    isValid,
    onSendOneMoreTimeHandler,
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
        {!isValid ? (
          <Pressable
            style={styles.sendOneMore}
            onPress={onSendOneMoreTimeHandler}
          >
            <Text variant="link">Send one more time</Text>
          </Pressable>
        ) : null}
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
  sendOneMore: {
    marginTop: 40,
    width: '100%',
    alignItems: 'center',
  },
});

export * from './types';
