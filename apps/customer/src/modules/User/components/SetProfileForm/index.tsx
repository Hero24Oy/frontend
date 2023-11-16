import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { KeyboardAwareScrollView, Text, View, VStack } from '@hero24/ui';

import {
  BusinessCustomerSection,
  BusinessCustomerSwitch,
  InputSection,
  SubmitButton,
} from './components';
import { useLogic, UseLogicParams } from './hooks';

type SetProfileFormProps = UseLogicParams;

export const SetProfileForm: FC<SetProfileFormProps> = (props) => {
  const {
    control,
    basicInputFields,
    businessCustomerInputFields,
    isLoading,
    isValid,
    onSubmitHandler,
  } = useLogic(props);

  return (
    <View style={styles.form}>
      <BusinessCustomerSwitch control={control} name="isBusinessCustomer" />
      <KeyboardAwareScrollView contentContainerStyle={styles.keyboardAwareView}>
        <VStack style={styles.inputFieldsContainer}>
          <Text style={styles.header}>Add personal info</Text>
          <InputSection control={control} inputFields={basicInputFields} />
          <BusinessCustomerSection
            control={control}
            isBusinessCustomerControllerName="isBusinessCustomer"
            inputFields={businessCustomerInputFields}
          />
        </VStack>
      </KeyboardAwareScrollView>
      <SubmitButton
        isLoading={isLoading}
        isDisabled={!isValid}
        onPress={onSubmitHandler}
      />
    </View>
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
  keyboardAwareView: { flex: 1 },
  header: { fontSize: 24, lineHeight: 28.8 },
  inputFieldsContainer: { flex: 1, gap: 24 },
});
