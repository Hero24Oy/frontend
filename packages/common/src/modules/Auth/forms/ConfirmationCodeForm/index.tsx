import { yupResolver } from '@hookform/resolvers/yup';
import { confirmationCodeFormValidationSchema } from 'core';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import {
  Button,
  Color,
  ConfirmationInput,
  Pressable,
  Text,
  VStack,
} from '@hero24/ui';

import { CODE_LENGTH, initialFormState } from './constants';
import { ConfirmationCodeFormData } from './types';

import { useCustomForm, useFieldValidation } from '$common/modules/Auth/hooks';

export const ConfirmationCodeForm: FC = () => {
  const onSubmit = (_data: ConfirmationCodeFormData): void => {
    // TODO -- add onSubmit logic
  };

  const { control, onSubmitHandler, isLoading } =
    useCustomForm<ConfirmationCodeFormData>({
      resolver: yupResolver(confirmationCodeFormValidationSchema(CODE_LENGTH)),
      defaultValues: initialFormState,
      mode: 'onChange',
      onSubmit,
    });

  const isCodeValid = useFieldValidation({ control, name: 'code' });

  const onSendOneMoreTimeHandler = (): void => {
    return undefined;
  };

  return (
    <VStack style={styles.wrapper}>
      {/* TODO replace with i18n call */}
      <VStack>
        <ConfirmationInput
          control={control}
          name="code"
          cellCount={CODE_LENGTH}
        />
        {!isCodeValid ? (
          <Pressable
            style={styles.sendOneMore}
            onPress={onSendOneMoreTimeHandler}
          >
            <Text style={styles.message}>Send one more time</Text>
          </Pressable>
        ) : null}
      </VStack>
      <Button
        onPress={onSubmitHandler}
        isDisabled={!isCodeValid}
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
  message: {
    color: Color.BLACK_00,
  },
});

export * from './types';
