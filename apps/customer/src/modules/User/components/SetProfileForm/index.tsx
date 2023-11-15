import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, Input, SafeAreaView, Text, VStack } from '@hero24/ui';

import { BusinessCustomerSwitch } from './components';
import { useLogic } from './useLogic';

export const SetProfileForm: FC = () => {
  const { control, onSubmitHandler, isLoading, isValid } = useLogic();

  // TODO add fields for business customer
  // TODO disable editing email if logged via provider where email is provided
  return (
    <SafeAreaView>
      <VStack style={styles.form}>
        <BusinessCustomerSwitch control={control} name="businessCustomer" />
        <VStack style={styles.inputFields}>
          <Text variant="regular">Add personal info</Text>
          <Input
            placeholder="Enter"
            control={control}
            name="firstName"
            title="First name"
          />
          <Input
            placeholder="Enter"
            control={control}
            name="lastName"
            title="Last name"
          />
          <Input
            placeholder="Enter"
            control={control}
            name="email"
            title="Email"
          />
        </VStack>
        <Button
          isLoading={isLoading}
          isDisabled={isLoading || !isValid}
          onPress={onSubmitHandler}
        >
          Continue
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  form: {
    paddingHorizontal: 16,
    justifyContent: 'space-around',
    flex: 1,
  },
  inputFields: { flex: 1, gap: 0 },
});
