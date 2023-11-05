import { yupResolver } from '@hookform/resolvers/yup';
import { confirmationCodeFormValidationSchema } from 'core/validation';
import { useCustomForm, useFieldValidation } from 'modules/Auth/hooks';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, ConfirmationInput, Pressable, Text, VStack } from '@hero24/ui';

const CODE_LENGTH = 4;

interface FormData {
  code: string;
}

export type ConfirmationCodeFormProps = {
  onSuccessConfirmHandler: () => void;
};

export const ConfirmationCodeForm: FC<ConfirmationCodeFormProps> = (props) => {
  const { onSuccessConfirmHandler } = props;

  const onSubmit = (_data: FormData): void => {
    onSuccessConfirmHandler();
  };

  const { control, onSubmitHandler, isLoading } = useCustomForm<FormData>({
    resolver: yupResolver(confirmationCodeFormValidationSchema(CODE_LENGTH)),
    defaultValues: { code: '' },
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
            <Text color="BLACK_00">Send one more time</Text>
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
});
