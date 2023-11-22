import { FC } from 'react';
import { Control } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { VStack } from '@hero24/ui';

import { PaymentField } from '../../types';
import { PaymentDataField } from '../PaymentDataField';

import { ProfileCreation } from '$modules/Profile/stores';

type Props = {
  control: Control<ProfileCreation['paymentData']>;
  fields: PaymentField[];
};

export const PaymentDataFields: FC<Props> = (props) => {
  const { fields, control } = props;

  return (
    <VStack style={styles.inputs}>
      {fields.map(({ name, ...fieldProps }) => (
        <PaymentDataField
          key={name}
          control={control}
          name={name}
          {...fieldProps}
        />
      ))}
    </VStack>
  );
};

const styles = StyleSheet.create({
  inputs: {
    gap: 3,
  },
});
