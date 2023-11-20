import { FC } from 'react';
import { Control } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { Alert, Button, LockIcon, VStack } from '@hero24/ui';

import { PaymentDataFields } from './components';
import { fieldsMapper } from './constants';

import { HeroType, ProfileCreation } from '$modules/Profile/stores';

type Props = {
  control: Control<ProfileCreation['paymentData']>;
  heroType: HeroType;
  isValid: boolean;
  submitData: () => void;
};

export const PaymentDataForm: FC<Props> = (props) => {
  const { control, heroType, isValid, submitData } = props;

  const fields = fieldsMapper[heroType];

  return (
    <VStack style={styles.form}>
      <PaymentDataFields control={control} fields={fields} />

      <VStack style={styles.submit}>
        <Alert
          Icon={LockIcon}
          action="info"
          text="We securely store your information for identity verification and fraud prevention. Hero24 will never use it for anything else."
        />

        <Button onPress={submitData} isDisabled={!isValid}>
          Continue
        </Button>
      </VStack>
    </VStack>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: 'space-between',
  },
  submit: {
    gap: 12,
  },
});
