import { FC } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  Button,
  Input,
  KeyboardAwareScrollView,
  Text,
  View,
  VStack,
} from '@hero24/ui';

import { BusinessCustomerForm, BusinessCustomerSwitch } from './components';
import { useLogic } from './useLogic';

export const SetProfileForm: FC = () => {
  const { control, onSubmitHandler, isLoading, isValid } = useLogic();
  const { bottom } = useSafeAreaInsets();

  // TODO add fields for business customer
  // TODO disable editing email if logged via provider where email is provided
  // TODO add validation based on business customer flag
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.form}
      scrollEnabled={false}
    >
      <BusinessCustomerSwitch control={control} name="businessCustomer" />

      <VStack style={styles.inputFieldsContainer}>
        <Text style={styles.header}>Add personal info</Text>
        <View style={styles.inputFieldContainer}>
          <Input
            placeholder="Enter"
            control={control}
            name="firstName"
            title="First name"
          />
        </View>
        <View style={styles.inputFieldContainer}>
          <Input
            placeholder="Enter"
            control={control}
            name="lastName"
            title="Last name"
          />
        </View>
        <View style={styles.inputFieldContainer}>
          <Input
            placeholder="Enter"
            control={control}
            name="email"
            title="Email"
          />
        </View>
        <BusinessCustomerForm
          control={control}
          businessCustomerControllerName="businessCustomer"
          businessIdControllerName="businessId"
          businessNameControllerName="businessName"
        />
      </VStack>
      <Button
        isLoading={isLoading}
        isDisabled={isLoading || !isValid}
        onPress={onSubmitHandler}
        style={{ marginBottom: bottom }}
      >
        Continue
      </Button>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    marginHorizontal: 16,
    marginTop: 16,
    justifyContent: 'space-around',
    flex: 1,
    gap: 24,
  },
  header: { fontSize: 24, fontWeight: '600', lineHeight: 28.8 },
  inputFieldsContainer: { flex: 1, gap: 24 },
  inputFieldContainer: {
    height: 65,
  },
});
