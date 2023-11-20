import { FC, memo } from 'react';
import { Control } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { Input, VStack } from '@hero24/ui';

import { PaymentField } from '../../types';

import { ProfileCreation } from '$modules/Profile/stores';

type Props = {
  control: Control<ProfileCreation['paymentData']>;
  fields: PaymentField[];
};

export const PaymentDataFields: FC<Props> = memo(({ fields, control }) => {
  return (
    <VStack style={styles.inputs}>
      {fields.map(({ name, placeholder, title }) => (
        <Input
          key={name}
          control={control}
          name={name}
          title={title}
          placeholder={placeholder}
        />
      ))}
    </VStack>
  );
});

const styles = StyleSheet.create({
  inputs: {
    gap: 3,
  },
});
