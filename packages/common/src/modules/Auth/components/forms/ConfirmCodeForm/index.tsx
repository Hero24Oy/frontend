// import { PhoneInput } from '@hero24/ui-library/src/components/atoms/PhoneInput';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, ConfirmCodeInput, VStack } from '@hero24/ui';

import { Props, useConfirmCodeForm } from './hooks/useConfirmCodeForm';

export const ConfirmCodeForm: FC<Props> = (props) => {
  const { codeLength } = props;
  const { onFormSubmit, control, isValid } = useConfirmCodeForm(props);

  return (
    <VStack style={styles.container}>
      {/* TODO replace button label and placeholders with i18n call */}
      <ConfirmCodeInput cellCount={codeLength} control={control} name="code" />
      <Button onPress={onFormSubmit} isDisabled={!isValid}>
        Continue
      </Button>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    gap: 16,
  },
});
